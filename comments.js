// create web server
// create a web server that listens on port 3000
// create a route that listens to the path /comments
// when a user visits /comments, send back a response that says 'this is the comments page'
// when a user visits any other path, send back a response that says 'page not found'

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('this is the comments page');
});

app.get('*', (req, res) => {
  res.send('page not found');
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

// Path: comments.js
// create web server
// create a web server that listens on port 3000
// create a route that listens to the path /comments
// when a user visits /comments, send back a response that says 'this is the comments page'
// when a user visits /comments/1, send back a response that says 'this is the first comment'

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('this is the comments page');
});

app.get('/comments/1', (req, res) => {
  res.send('this is the first comment');
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

// Path: comments.js
// create web server
// create a web server that listens on port 3000
// create a route that listens to the path /comments
// when a user visits /comments, send back a response that says 'this is the comments page'
// when a user visits /comments/1, send back a response that says 'this is the first comment'
// when a user visits /comments/2, send back a response that says 'this is the second comment'
// when a user visits /comments/3, send back a response that says 'this is the third comment'

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('this is the comments page');
});

app.get('/comments/1', (req, res) => {
  res.send('this is the first comment');
});

app.get('/comments/2',
