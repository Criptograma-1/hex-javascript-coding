const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const lines = await (await fs.readFile(path, { encoding: 'utf8' })).split(/\r?\n/);
    lines.shift();
    let countStudents = 0;
    const printAux = {};
    for (const line of lines) {
      if (line !== '') {
        countStudents += 1;
        const [firstName, lastName, age, field] = line.split(','); // eslint-disable-line
        if (!printAux[field]) {
          printAux[field] = {
            students: 1,
            studentsNames: [firstName],
          };
        } else {
          const newCount = printAux[field].students + 1;
          const newStudents = (printAux[field].studentsNames).concat(firstName);
          printAux[field] = {
            students: newCount,
            studentsNames: newStudents,
          };
        }
      }
    }
    console.log(`Number of students: ${countStudents}`);
    for (const field of Object.keys(printAux)) {
      const numberOfStudents = printAux[field].students;
      const names = printAux[field].studentsNames.join(', ');
      console.log(`Number of students in ${field}: ${numberOfStudents}. List: ${names}`);
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = countStudents;
