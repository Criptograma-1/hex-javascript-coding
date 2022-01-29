#!/usr/bin/node
const argv = process.argv;
const id = argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
const request = require('request');
request(url, function(err, response, body) {
  if (err) {
    console.error('error:', err);
  } else {
  console.log(JSON.parse(body).title);
  }
});
