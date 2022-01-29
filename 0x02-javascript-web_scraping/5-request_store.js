#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;
const url = argv[2];
const file = argv[3];
const request = require('request');
request(url, function (err, response, body) {
  if (err) {
    console.error('error:', err);
  } else {
    fs.writeFile(file, body, 'utf8', function (error) {
      if (error) {
        return console.log(error);
      }
    });
  }
});
