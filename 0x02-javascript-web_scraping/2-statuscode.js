#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');
request(url, function(err, response, body) {
    console.log("code:", response && response.statusCode);
  });
