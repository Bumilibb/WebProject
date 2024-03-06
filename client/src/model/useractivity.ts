import useractivity from '@/data/useractivity.json';

export interface PersonalData {
  firstName: string;
  lastName: string;
  genderIdentity: string;
  age: number;
  height: number;
  weight_class: string;
  weight: number | null;
  online_handle: string;
  aboutMe: string;
  oneAdjectiveToDescribeMe: string;
  emails: string[];
  activities: Activity[];
}

export interface Activity {
  type: string;
  wasDifficult: boolean;
  avgHeartRate: number;
  distanceInMeters: number;
  reps: number;
  sets: number;
  weightInPounds: number;
  durationInMinutes: number;
  location: string;
  notes: string;
  
}

export interface Comment {
  author_id: number;
  author: string;
  comment: string;
  isLookingForReplyFromAuthor: boolean;
  numOfLikes: number;
  likedBy: number[];
}

export interface Root {
  personalData: PersonalData;
  isAdmin: string;
  id: number;
}

export function getData(): Root[] {
  return useractivity.usersact;
}
