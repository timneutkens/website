import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class BasementDoc extends Document {
  constructor(props) {
    super(props);
  }

  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="zvG7VXmVxCwK5HxxVXq-c0SVHe2fwx1my7GG7tObgLA"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
          <meta name="google" content="notranslate" />
          <meta
            name="keywords"
            content="basement, studio, UX, UI, userexperience, webdesign, webdeveloper, design, codedesign, code, hashtag, development website, websitedevelopment, webservices"
          />
          <meta name="author" content="basement.studio" />
          <meta
            name="description"
            content="We're a brand creators, we're code hypebeasts, we inhale your story and exhale digital experiences."
          />
          <meta
            name="subject"
            content="This is our institutional website, to know more contact us."
          />
          <link rel="canonical" href="https://basement.studio" />
          <meta name="referrer" content="no-referrer" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-dns-prefetch-control" content="off" />
          <meta httpEquiv="Window-Target" content="_value" />
          <meta name="ICBM" content="-38, -57.55" />
          <meta name="geo.position" content="-38;-57.55" />
          <meta name="geo.region" content="AR[01]" />
          <link rel="stylesheet" href="/static/global.css" />
          <meta name="google-site-verification" content="" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icon/favicon-16x16.png"
          />
          {/* <link rel="manifest" href="/static/icon/site.webmanifest" /> */}
          <link
            rel="mask-icon"
            href="/static/icon/safari-pinned-tab.svg"
            color="var(--color-primary)"
          />
          <meta name="msapplication-TileColor" content="var(--color-primary)" />
          <meta name="theme-color" content="#fff" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Our work is serious, we are not | basement.studio"
          />
          <meta
            property="og:description"
            content="We're a brand creators, we're code hypebeasts, we inhale your story and exhale digital experiences."
          />
          <meta property="og:url" content="https://basement.studio" />
          <meta
            property="og:site_name"
            content="We research, we design, and we code | basement.studio"
          />
          <meta property="og:image" content="/static/og-image.png" />
          <meta
            property="og:image:secure_url"
            content="https://basement.studio/static/og-image.png"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="We're a brand creators, we're code hypebeasts, we inhale your story and exhale digital experiences."
          />
          <meta
            name="twitter:title"
            content="Our work is serious, we are not | basement.studio"
          />
          <meta name="twitter:site" content="@basementdot" />
          <meta
            name="twitter:image"
            content="https://basement.studio/static/og-image.png"
          />
          <meta name="twitter:creator" content="@basementdot" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default BasementDoc;
