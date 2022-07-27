const fs = require('fs');

function readDatabase(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, results) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
      if (results) {
        const fields = {};
        const dataShow = {};
        let data = results.toString().split('\n');
        data = data.filter((element) => element.length > 0);

        data.shift();
        data.forEach((element) => {
          if (element.length > 0) {
            const row = element.split(',');
            if (row[3] in fields) {
              fields[row[3]].push(row[0]);
            } else {
              fields[row[3]] = [row[0]];
            }
          }
        });
        for (const field in fields) {
          if (field) {
            const list = fields[field];
            dataShow[field] = {
              list: `List: ${list.toString().replace(/,/g, ', ')}`,
              number: list.length,
            };
          }
        }
        resolve(dataShow);
      }
    });
  });

  return promise;
}

module.exports = readDatabase;
