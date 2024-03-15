<script setup lang="ts">
import { ref } from 'vue';
import { type User, getUsers, storeUser } from "@/model/users";

const users = ref([] as User[]);
users.value = getUsers();

const removeUser = (user: User) => {
  users.value = users.value.filter((u) => u !== user);
};

</script>

<template>
   
    <div class="box">
      <article class="media" v-for="user in users" :key="user.id">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="image is-rounded" :src="user.image" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="box">
            <div class="media-right">
              <figure class="image is-5by3">
                <img :src="user.activityImage" alt="Activity Image">
              </figure>
              <div class="media-content">
                <div class="post-header">
                  <strong class="post-author">{{ user.firstName }}</strong>
                  <small class="post-date">{{ user.date }}</small>
                </div>
                <div class="post-body">
                  <br>
                
                  <div class="post-details">
                    <p class="post-description">
                  <strong>Status: </strong>  {{ user.workout }}
                  </p>
                  <p class="post-description">
                    <strong>calories Burned:</strong> {{ user.caloriesBurned }} calories!
                  </p>
                    <p><span class="label">Duration:</span> {{ user.duration }}</p>
                    <p><span class="label">Workout Type:</span> {{ user.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-right">
          <button class="delete" @click="removeUser(user)"></button>
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

