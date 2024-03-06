import user from '@/data/useractivity.json';

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
  numDaysAgo: number;
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
  numOfComments: number;
  numOfLikes: number;
  comments?: Comment[];
}

export interface Comment {
  author_id: number;
  author: string;
  comment: string;
  isLookingForReplyFromAuthor: boolean;
  numOfLikes: number;
}

export interface User {
  personalData: PersonalData;
  isAdmin: string;
  id: number;
}

export interface UsersData {
  users: User[];
}


export function getUsers(): User[] {
  return user.users;
}