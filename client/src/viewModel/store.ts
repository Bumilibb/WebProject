import { reactive } from "vue";
import { type User } from "@/model/users";
const store = ({
  state: reactive({
    user:{} as User,
    token:''
  }),

  getters: {
    getUser(){
      return store.state.user;
    },
    getToken(){
      return store.state.token;
    },
    getPicture(){
      return store.state.user.pic_url;
    }
  },

  mutations: {
    authenticateUser(data:User,token:string){
      store.state.user = data
      store.state.token = token
    }
  },

})

export default store;