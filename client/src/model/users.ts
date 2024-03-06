import user from '@/data/users.json';
import { ref } from 'vue';

export interface Hair {
  color: string;
  type: string;
}

export interface User {
  id: number;
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

export function getUsers(): User[] {
  return user.users;
}

export function useUser() {
  const users = ref([] as User[])
  users.value = getUsers()

  let isLoggedIn = ref(false);
  let currentUser = ref(null as User | null);

  return { isLoggedIn, currentUser };
}