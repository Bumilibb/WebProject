<script setup lang="ts">
import { ref } from 'vue'
import AddActivityCard from '@/components/AddCard.vue';
import ActivityCard from '@/components/ActivityCard.vue';
import { type User, getUsers } from "@/model/users";

const users = ref([] as User[])
users.value = getUsers();
</script>

<template>

    <AddActivityCard />

    <ActivityCard/>
  
</template>

<style scoped>


</style>

