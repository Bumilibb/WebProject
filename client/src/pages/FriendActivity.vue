<script setup lang="ts">
import { ref } from 'vue'
import { type User, getUsers } from "@/model/users";

const users = ref([] as User[])
const selectedUser = ref(null as User | null)
const isModalOpen = ref(false)
const showModal = ref(false);
users.value = getUsers();

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

function removeUser(user: User){
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
            <form @submit.prevent="addWorkout">
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
               
                <div class="media-left box">
                    <figure class="image is-64x64">
                        <img :src="user.image" alt="Image">
                    </figure>
                </div>

                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ user.firstName }}</strong> <small>{{ user.email }}</small> <small>2 hr ago</small>
                            <br>
                            Biked through campus - { "lat": 41.7459793, "lng": -74.082801 }
                            <br>
                            <span class="label">Distance:</span> 1.0 mi
                            <br>
                            <span class="label">Duration:</span> 0:30
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item" aria-label="reply">
                                <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="retweet">
                                <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="like">
                                <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
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
</style>