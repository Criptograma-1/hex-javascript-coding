export interface MajorCredits {
		credit: number;
		_brand: 'Major';
}

export interface MinorCredits {
	credit: number;
	_brand: 'Minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	return { credit: subject1.credit + subject2.credit } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	return { credit: subject1.credit + subject2.credit } as MinorCredits;
}