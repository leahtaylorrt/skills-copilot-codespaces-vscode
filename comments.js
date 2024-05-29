// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// create comments array
const comments = [
  {
    id: 1,
