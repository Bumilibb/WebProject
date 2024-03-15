<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, defineEmits } from 'vue';
import { type User, storeUser, getUsers } from "@/model/users";

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
  console.log({ isActive: isActive.value });
}

const users = storeUser.users;
const emit = defineEmits(['updateUser']);

const Currentuser = ref<User | null>(null);

const SetCurrentUser = (user: User) => {
  Currentuser.value = user;
  emit('updateUser', user);
};

const Logout = () => {
  Currentuser.value = null;
  emit('updateUser', null);
};
</script>

<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="28" />
      </a>

      <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive }" class="navbar-burger" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{ 'is-active': isActive }" id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" v-if="Currentuser">
        <RouterLink to="/Activity" class="navbar-item fas fa-running" style="margin-top: 10px;">
          My Activity
        </RouterLink>


        <RouterLink to="/statistics" class="navbar-item fas fa-chart-line" style="margin-top: 10px;">
          Statistics
        </RouterLink>

        <RouterLink to="/FriendActivity" class="navbar-item fas fa-users" style="margin-top: 10px;">
          Friends Activity
        </RouterLink>

        <RouterLink to="/search" class="navbar-item fa fa-search" style="margin-top: 10px;">
          People Search
        </RouterLink>

        <div class="navbar-item has-dropdown is-hoverable ">
          <a class="navbar-link fa fa-user-circle" style="margin-top: 10px;">
            Admin
          </a>

          <div class="navbar-dropdown">
            <RouterLink to="/user" class="navbar-item fa fa-user" v-if="Currentuser.isAdmin">
              User
            </RouterLink>
            <hr class="navbar-divider">

            <RouterLink to="/Report" class="navbar-item">
              Report an issue
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">

          <!-- login -->
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="Currentuser ? Logout() : null">
                <span>{{ Currentuser ? 'Logout' : 'Login' }}</span>
                  <i aria-hidden="true" v-if="!Currentuser"></i>
              </button>
            </div>

            <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="!Currentuser">
              <div class="dropdown-content">
                <a v-for="user in users" :key="user.username" class="dropdown-item" @click="SetCurrentUser(user)">
                  <img class="user-image" :src="user.image" width="20" height="20"> {{ user.username }}
                </a>

                <hr class="navbar-divider">
                <RouterLink to="/login" class="navbar-item fa fa-user-o">
                  Other Account
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="button-left">
            <RouterLink to="/signup" class="navbar-item button is-white">
              <strong>Sign up</strong>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-item {
  color: black;
}

.dropdown-menu{
  background-color: #f5f5f5;
  padding: auto;
  font-size: small;
}
</style>
