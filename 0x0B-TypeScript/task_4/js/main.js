"use strict";
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
///<reference path ='./subjects/Cpp.ts' />
///<reference path ='./subjects/Java.ts' />
///<reference path ='./subjects/React.ts' />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
var cpp = new Subjects.Cpp();
exports.cpp = cpp;
var java = new Subjects.Java();
exports.java = java;
var react = new Subjects.React();
exports.react = react;
var cTeacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
};
exports.cTeacher = cTeacher;
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
