/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements(), java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements(), react.getAvailableTeacher());