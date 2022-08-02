/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />
namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		public getRequirements(): string {
			return `Here is the list of requirements for Cpp`;
		}

		public getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingC) {
				return `No available teacher`;
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}

}