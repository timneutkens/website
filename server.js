const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const SparkPost = require('sparkpost');

const dev = process.env.NODE_ENV !== 'production';

if (dev) {
  require('dotenv').config();
}

const mailer = new SparkPost(process.env.sparkpostapikey);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post('/api/contact', (req, res) => {
    const { email = '', name = '', message = '' } = req.body;
    mailer.transmissions
      .send({
        options: {
          sandbox: false
        },
        content: {
          from: { name: 'Website', email: 'info@basement.studio' },
          reply_to: email,
          subject: `New message from ${name}`,
          html: `<html><body><h1>A new mail was sent from the website's contact form</h1><h3>Sender: ${name}</h3><h3>Reply to: ${email}</h3><h2>Content: <br> ${message}</h2></body></html>`
        },
        recipients: [{ address: 'info@basement.studio' }]
      })
      .then(data => {
        res.send('success');
      })
      .catch(err => {
        console.log(err);
        res.send('bad');
      });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});
