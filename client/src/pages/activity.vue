<script setup lang="ts">
import AddActivityCard from '@/components/AddCard.vue';
import { useStore } from "@/viewModel/store";

const { getCurrentUser, removeUser  } = useStore();

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
          <button class="delete" @click="removeUser"></button> 
        </div>
      </article>
    </div>


</template>

<style scoped>

.label {
    font-weight: bold;
}

.post-date{
  color: #4a4a4a;
  font-size: 0.8rem;
  margin-left: 500px;
  
}

.post-author {
  color: #212a70;
  font-family: "Arial", sans-serif; /* Replace with your desired font */
  font-size: 1.2rem; /* Adjust the font size as needed */
  font-weight: bold; /* Adjust the font weight as needed */
}

  .post-detail {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #777777;
  }

</style>

