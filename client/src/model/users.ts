import { reactive, ref } from 'vue';
import { api } from "../viewModel/store"

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

export async function getUsers() {
  const data = await api<User[]>("users");
  return data ? data.data : [];
}

export async function useUser() {
  const users = ref([] as User[]);
  users.value = await getUsers();
}

//repeat for store.ts but with reactive

export const storeUser = reactive({
  users: getUsers()
});

//export function getCurrentUser(): User | null {
//  const currentUsername = localStorage.getItem('currentUsername');
//  if (!currentUsername) return null;
//
//  const currentUser = storeUser.users.find(user => user.username === currentUsername);
//  return currentUser || null;
//}



