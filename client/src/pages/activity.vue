<script setup lang="ts">
import { ref, inject } from 'vue'
import AddActivityCard from '@/components/AddCard.vue';
import MyActivityCard from '@/components/MyActivityCard.vue';
import { useStore } from "@/viewModel/store";

const { getCurrentUser } = useStore();

const currentUser = getCurrentUser();

</script>

<template>

    <AddActivityCard />

    <div class="box" v-if="currentUser">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="image is-rounded" :src="currentUser.image" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="box">
            <div class="media-right">
              <figure class="image is-5by3">
                <img :src="currentUser.activityImage" alt="Activity Image">
              </figure>
              <div class="media-content">
                <div class="post-header">
                  <strong class="post-author">{{ currentUser.firstName }}</strong>
                  <small class="post-date">{{ currentUser.date }}</small>
                </div>
                <div class="post-body">
                  <br>
                
                  <div class="post-details">
                    <p class="post-description">
                  <strong>Status: </strong>  {{ currentUser.workout }}
                  </p>
                  <p class="post-description">
                    <strong>calories Burned:</strong> {{ currentUser.caloriesBurned }} calories!
                  </p>
                    <p><span class="label">Duration:</span> {{ currentUser.duration }}</p>
                    <p><span class="label">Workout Type:</span> {{ currentUser.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-right">
         <!-- <button class="delete" @click="removeUser(user)"></button> -->
        </div>
      </article>
    </div>

</template>

<style scoped>


</style>

