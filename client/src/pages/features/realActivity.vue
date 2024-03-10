<script setup lang="ts">
import { ref, type PropType, computed } from 'vue';
import { type User, getUsers } from "@/model/users";
import { useRoute, useRouter } from 'vue-router'

const users = ref([] as User[])
users.value = getUsers()

const showModal = ref(false);
const title = ref('');
const date = ref('');
const duration = ref('');
const location = ref('');
const picture = ref('');
const type = ref('');
const search = ref('')

const workouts = ref([]);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const deleteCard = (index) => {
  workouts.value.splice(index, 1);
};

const addWorkout = (event) => {
  event.preventDefault();
  workouts.value.push({
    title: title.value,
    date: date.value,
    duration: duration.value,
    location: location.value,
    picture: picture.value,
    type: type.value
  });
  closeModal();
};
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
            <button class="button" @click="closeModal">Cancel</button>
          </footer>
        </div>
      </div>

      <div class="block" v-for="(workout, index) in workouts" :key="index">
        <div class="card">
          <button class="delete is-small" style="position: absolute; right: 10px; top: 10px;" @click="deleteCard(index)"></button>
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                  <p>
                    <strong>{{ workout.title }}</strong> <small>@johnsmith</small> <small>{{ workout.date }}</small>
                    <br>
                    {{ workout.type }} for {{ workout.duration }} at {{ workout.location }}
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
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .Myactivity {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.button {
  background-color: rgb(232, 146, 160);
  border-color: #dbdbdb;
  color: #ffffff;
  margin-top: 20px;
}

.button.is-primary.is-hovered,
.button.is-primary:hover {
  background-color: rgb(200, 93, 150);
  border-color: transparent;
  color: #fff;
}
</style>
