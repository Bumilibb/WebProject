import user from '@/data/users.json';

export interface Hair {
  color: string;
  type: string;
}

export interface User {
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
}

export function getActivity(): User[] {
  return user.users;
}