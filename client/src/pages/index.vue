<script setup lang="ts">


</script>

<template>
   
</template>


  <!-- ... -->
  <tr v-for="user in users" :key="user.id">
    <td><img class="user-image" :src="user.image"></td>
    <!-- ... -->
  </tr>
  <!-- ... -->
</template>

<style scoped>
  /* ... */
  .user-image {
    width: 50px; /* Adjust the width as needed */
  }