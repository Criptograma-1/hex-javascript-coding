#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;
const file = argv[2];

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    }
    process.stdout.write(data);
});
