#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;
const file = argv[2];
const text = argv[3];

fs.writeFile(file, text, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});
