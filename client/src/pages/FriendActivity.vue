<script setup lang="ts">
import { ref } from 'vue'
import { type User, getUsers } from "@/model/users";

const users = ref([] as User[])
const showModal = ref(false);

users.value = getUsers();

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

function removeUser(user: User) {
  users.value = users.value.filter(u => u.id !== user.id);
}
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <button class="button is-primary" @click="openModal">Add Workout</button>
      <div v-if="showModal" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Add Activity</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Title" v-model="title">
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" type="date" v-model="date">
                </div>
              </div>

              <div class="field">
                <label class="label">Duration</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Duration" v-model="duration">
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Location" v-model="location">
                </div>
              </div>

              <div class="field">
                <label class="label">Picture</label>
                <div class="control">
                  <input class="input" type="file">
                </div>
              </div>

              <div class="field">
                <label class="label">Type</label>
                <div class="control">
                  <div class="select">
                    <select v-model="type">
                      <option>Select type</option>
                      <option>Run</option>
                      <option>Bike</option>
                      <option>Walk</option>
                      <option>Cardio</option>
                      <option>Strength</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="closeModal">Save changes</button>
          </footer>
        </div>
      </div>
    </div>
  </div>

  <div class="columns is-centered">
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
  </div>
</template>

<style scoped>
.box-list {
  margin-top: 50px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 0.75rem;
  width: 50%;
}

.label {
  font-weight: bold;
}

@media (min-width: 1024px) {
  .Myactivity {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.button {
  border-radius: 0.5rem;
  background-color: rgb(232, 146, 160);
  border-color: #dbdbdb;
  color: #ffffff;
  margin-top: 20px;
  padding: 10px 280px;
  padding-right: 45%;
  padding-left: 40%;
}

.button.is-primary.is-hovered,
.button.is-primary:hover {
  background-color: rgb(200, 93, 150);
  border-color: transparent;
  color: #fff;
}

.image img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
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