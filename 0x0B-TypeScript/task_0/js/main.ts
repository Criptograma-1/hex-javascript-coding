interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Andy",
  lastName: "Reis",
  age: 20,
  location: "New York"
}

const student2: Student = {
  firstName: "Jon",
  lastName: "Jhons",
  age: 20,
  location: "New York"
}

const studentsList = [student1, student2];
const table = studentsList.map((student) => {
  return `
    <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
    </tr>
  `;
}).join('');
//Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
//Each row should contain the first name of the student and the location