
/**
 * Created by Jesus Cirion on 12/7/2016.
 */

const express = require('express');
const servers = require('./servers');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello from Demo for Bold Tech Company with Express!');
});

app.get('/servers', (request, response) => {
  servers.findServers()
    .then(data => {
      response.send(data);
    })
    .catch(error => {
      response.status(500).send(error);
    });
});

app.get('/servers', (request, response) => {
  response.send('Hello from Express!')
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
