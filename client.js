const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: 'jhmb57sm', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  token:
    'skKJyIRD7DfT4XVZeNGAEzLWJtRSEUhPT2XgNPz9DGyXK40zguQ6G3MTCsSFcpCF4PICavMOaLj2Fh9ZlLtOnD0tYcka8UiyQ3LIarzRsmGUwI71NaE3eGDCAX8oEnDgNeREi4Pn8HNgdliYRsHxbR8JQYrdgImyebFs7ftnAtPfm5EThvwg',
  useCdn: false // `false` if you want to ensure fresh data
});
