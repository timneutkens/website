import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Helmet from 'react-helmet';
import client from '../client';
import Header from '../components/Header';
import Footer from '../components/Footer';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <Helmet>
          <title>{`Zero Waste | ${this.state.data.title}`}</title>
          <meta name="description" content={this.state.data.excerpt} />
          <meta
            property="og:title"
            content={`Zero Waste | ${this.state.data.title}`}
          />
          <meta property="og:description" content={this.state.data.excerpt} />
          <meta property="og:url" content={this.state.data.url} />
          <meta property="og:image" content={this.state.data.image} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={this.state.data.excerpt} />
          <meta
            name="twitter:title"
            content={`Zero Waste | ${this.state.data.title}`}
          />
          <meta name="twitter:image" content={this.state.data.image} />
          <meta name="twitter:site" content="@basementdot" />
          <meta name="twitter:creator" content="@basementdot" />
        </Helmet>
        <Header inner />
        {/* <Hero
          blog
          title={this.props.data.title}
          background={this.props.data.image}
          data={{
            user: {
              name: this.props.data.authorName,
              image: this.props.data.authorImage
            },
            content: {
              title: this.props.data.title,
              description: this.props.data.excerpt,
              image: this.props.data.image,
              alt: `${this.props.data.title} image`,
              date: format(this.props.data._updatedAt, 'MMMM DD, YYYY'),
              categories: this.props.data.categories,
              slug: this.props.data.slug
            }
          }}
        /> */}
        <article className="post">
          <BlockContent
            blocks={this.props.data.body}
            className="post__content"
            imageOptions={{ w: 800, fit: 'max' }}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
          />
        </article>

        <section className="author">
          <div className="content">
            <figure>
              <img
                src={this.props.data.authorImage}
                alt={`${this.props.data.authorName} profile picture`}
              />
            </figure>
            <div className="description">
              <p>WRITTEN BY</p>
              <p>{this.props.data.authorName}</p>
              <p>{this.props.data.authorBio}</p>
            </div>
          </div>
        </section>

        <section className="blog">
          <h2 className="title">Other stories you may like:</h2>

          {/* <div className="card__wrapper">
            {this.props.posts.slice(0, 2).map((item, i) => (
              <Card
                key={i}
                ctaText="Read more"
                ctaLink=""
                data={{
                  user: {
                    name: item.authorName,
                    image: item.authorImage
                  },
                  content: {
                    title: item.title,
                    description: item.excerpt,
                    image: item.image,
                    alt: `${item.title} image`,
                    date: format(item._updatedAt, 'MMMM DD, YYYY'),
                    categories: item.categories,
                    slug: item.slug
                  }
                }}
              />
            ))}
          </div> */}
        </section>

        <Footer inner />
        <style jsx>{``}</style>
        <style jsx global>{``}</style>
      </section>
    );
  }
}

Blog.getInitialProps = async ({ query: { slug } }) => {
  const props = {
    data: [],
    posts: []
  };

  props.data = slug
    ? await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          excerpt,
          "slug": slug.current,
          "authorName": author->name,
          "authorPosition": author->position,
          "authorBio": author->bio,
          "categories": categories[]->title,
          "authorImage": author->image.asset->url,
          body,
          _updatedAt,
          "image": mainImage.asset->url
        }`,
        { slug }
      )
    : {};

  props.posts = await client.fetch(
    `*[_type == "post"]{
          title,
          excerpt,
          "slug": slug.current,
          "authorName": author->name,
          "authorPosition": author->position,
          "authorBio": author->bio,
          "categories": categories[]->title,
          "authorImage": author->image.asset->url,
          body,
          _updatedAt,
          "image": mainImage.asset->url
      }`
  );

  return props;
};

export default Blog;
