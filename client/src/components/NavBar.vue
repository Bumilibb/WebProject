<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>

<template>
<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="28" />
    </a>

    <a role="button"  @click="toggleMenu" :class="{ 'is-active': isActive } " class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <RouterLink to="/Activity" class="navbar-item">
        My Activity
      </RouterLink>

      <RouterLink to="/Statistics" class="navbar-item">
        Statistics
      </RouterLink>

      <RouterLink to="/FriendActivity" class="navbar-item">
        Friends Activity
      </RouterLink>

      <RouterLink to="/Search" class="navbar-item">
        People Search
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/user" class="navbar-item">
            User
          </RouterLink>
          <RouterLink to="/Settings" class="navbar-item">
            Settings
          </RouterLink>
          <RouterLink to="/Contact" class="navbar-item">
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
          
            <RouterLink to="/signup" class="navbar-item button is-white"> 
              <strong>Sign up</strong>
            </RouterLink>
          
            <RouterLink to="/login" class="navbar-item button is-white">
            Log in
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
