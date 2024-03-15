<script setup lang="ts">
import { ref, computed } from 'vue'
import AddActivityCard from '@/components/AddCard.vue';
import MyActivityCard from '@/components/MyActivityCard.vue';
import { type User, getUsers } from '@/model/users';

</script>

<template>

    <AddActivityCard />

    <MyActivityCard/>

</template>

<style scoped>


</style>

