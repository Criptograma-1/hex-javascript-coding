type UUID = number;

export interface MajorCredits {
  credit: number;
  brand: UUID;
}

export interface MinorCredits {
  credit: number;
  brand: UUID;
}

export function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credit: subject1.credit + subject2.credit } as MajorCredits
}

export function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credit: subject1.credit + subject2.credit } as MinorCredits
}