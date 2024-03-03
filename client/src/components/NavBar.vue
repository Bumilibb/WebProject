<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
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
        Activity
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <RouterLink to="/signup" class="navbar-item"> 
              <strong>Sign up</strong>
            </RouterLink>
          </a>
          <RouterLink to="/login" class="navbar-item">
            Log in
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

    .router-link-exact-active {
        border-bottom: 2px solid #3f00d1;
    }

  

</style>