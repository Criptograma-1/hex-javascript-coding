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

interface printTeacherFunction {
  (firstName: string, lastName:string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => {
  return `${firstName[0]}. ${lastName}`;
};


interface StudentClassInterface {
  constructor(firstName: string, lastName:string): void;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this.firstName;
  }
}


