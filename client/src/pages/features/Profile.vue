<template>
  <div>
    <h1>{{ user?.firstName }} {{ user?.lastName }}</h1>
    <img :src="user?.image" alt="User Image" />
    <h2>ID: {{ user?.id }}</h2>
    <p>Age: {{ user?.age }}</p>
    <p>Gender: {{ user?.gender }}</p>
    <p>Email: {{ user?.email }}</p>
    <p>Birth Date: {{ user?.birthDate }}</p>
    <p>Height: {{ user?.height }}</p>
    <p>Weight: {{ user?.weight }}</p>
    <!-- Display other user properties here -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { User } from '@/model/users';
import { getUsers } from '@/model/users';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref<User | null>(null);

onMounted(async () => {
  const userId = Number(route.params.id);
  const users = getUsers();
  user.value = users.find(u => u.id === userId) || null;
});
</script>