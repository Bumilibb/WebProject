import user from '@/data/users.json';
import { reactive, ref } from 'vue';

export interface User {
  [x: string]: any;
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  isAdmin: boolean
  image: string
  
  activityID: number
  date: string
  name: string
  caloriesBurned: number
  duration: number
  activityImage: string
  workout: string
}

export function getUsers(): User[] {
  return user.users;
}

export function useUser() {
  const users = ref([] as User[])
  users.value = getUsers()
}
  //doesnt work properly yet
  /*let isLoggedIn = ref(false);
  let currentUser = ref(null as User | null);

  return { isLoggedIn, currentUser };
}
  */

//login function
export const storeUser = reactive({
  users: getUsers()
});

/*
export function deleteUser(username: string) {
  const index = storeUser.users.findIndex(user => user.username === username);
  if (index !== -1) {
    storeUser.users.splice(index, 1);
  }
}

*/
export function getCurrentUser(): User | null {
  const currentUsername = localStorage.getItem('currentUsername');
  if (!currentUsername) return null;

  const currentUser = storeUser.users.find(user => user.username === currentUsername);
  return currentUser || null;
}



