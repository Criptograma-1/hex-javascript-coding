///<reference path ='./subjects/Subject.ts' />
const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

let cTeacher = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	experienceTeachingC: 10,
};

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

export {
	cpp,
	java,
	react,
	cTeacher,
}