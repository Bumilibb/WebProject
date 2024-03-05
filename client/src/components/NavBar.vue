<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);
let isLoginDropdownActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function toggleLoginDropdown() {
  isLoginDropdownActive.value = !isLoginDropdownActive.value;
}

</script>

<template>
<nav class="navbar is-warning " role="navigation" aria-label="main navigation" >
  <div class="navbar-brand" >
    <a class="navbar-item" href="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="28" />
    </a>

    <a role="button"  @click="toggleMenu" :class="{ 'is-active': isActive } " class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu" >
    <div class="navbar-start">

    
     
      <RouterLink to="/Activity" class="navbar-item fas fa-running" style="margin-top: 10px;">
        My Activity
      </RouterLink>
      
      <RouterLink to="/Statistics" class="navbar-item fas fa-chart-line" style="margin-top: 10px;">
        Statistics
      </RouterLink>

      <RouterLink to="/FriendActivity" class="navbar-item fas fa-users" style="margin-top: 10px;">
        Friends Activity
      </RouterLink>

      <RouterLink to="/Search" class="navbar-item fa fa-search" style="margin-top: 10px;">
        People Search
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable ">
        <a class="navbar-link fa fa-user-circle" style="margin-top: 10px;">
          Admin
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/user" class="navbar-item fa fa-user">
            User
          </RouterLink>
          <RouterLink to="/Settings" class="navbar-item fa fa-cog">
            Settings
          </RouterLink>
          <RouterLink to="/Contact" class="navbar-item fa fa-phone">
            Contact
          </RouterLink>
          <hr class="navbar-divider">
          <RouterLink to="/issue" class="navbar-item">
            Report an issue
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
   
            <a role="button" @click="toggleLoginDropdown" :class="{ 'is-active': isLoginDropdownActive }" class="navbar-item button ">
              Log in
              <div class="navbar-dropdown">
                <RouterLink to="/account1" class="navbar-item">
                  Account 1
                </RouterLink>
                <RouterLink to="/account2" class="navbar-item ">
                  Account 2
                </RouterLink>
                <RouterLink to="/account3" class="navbar-item">
                  Account 3
                </RouterLink>
                <hr class="navbar-divider">
                <RouterLink to="/login" class="navbar-item fa fa-user-o">
                  Other Account
                </RouterLink>
              </div>
            </a>
          
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

  </style>
