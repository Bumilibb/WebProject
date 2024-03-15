import { ref } from 'vue';
import { type User } from "@/model/users";

// Store the current user in a reactive variable
const currentUser = ref<User | null>(null);

export function useStore() {
  // Function to set the current user
  const setCurrentUser = (user: User) => {
    currentUser.value = user;
  };

  // Function to get the current user
  const getCurrentUser = () => {
    return currentUser.value;
  };

  return {
    setCurrentUser,
    getCurrentUser
  }
}