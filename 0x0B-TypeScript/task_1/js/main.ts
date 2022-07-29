interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher (firstName: string, lastName:string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName:string): string;
}

const teacher3: Teacher = {
  firstName: 'Javier',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Uruguay',
  contract: false,
};
console.log(printTeacher('Jhon', "Doe"));

