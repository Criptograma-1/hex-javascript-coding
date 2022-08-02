/// <reference path="./Teacher.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Cpp.ts" />
namespace Subjects {
	export class Subject {
		public teacher: Teacher;

		public setTeacher(teacher: Teacher) {
			this.teacher = teacher;
		}
	}
}