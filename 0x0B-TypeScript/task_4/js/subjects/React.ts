/// <reference path='./Subject.ts' />
/// <reference path="./Teacher.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		public getRequirements(): string {
			return `Here is the list of requirements for React`;
		}

		public getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingReact) {
				return `No available teacher`;
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}

}