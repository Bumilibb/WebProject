
import { getUsers, type User } from "@/model/users";
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentUser = ref()
export const refCurrentUser = () =>  currentUser