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

const studentsList: Array<Student> = [student1, student2];
const table = studentsList.map((student) => {
  return `
    <tr>
    <td>${student.firstName}</td>
    <td>${student.location}</td>
    </tr>
  `;
}).join('');