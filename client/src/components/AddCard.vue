<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';
import { type User, getUsers } from "@/model/users";

const users = ref([] as User[]);
const newActivity = ref<User | null>(null);

onMounted(async () => {
  users.value = await getUsers();
});

function addActivity() {
  newActivity.value = {
    id: 0,
    firstName: '',
    lastName: '',
    maidenName: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    isAdmin: false,
    image: '',
    activityID: 0,
    date: '',
    name: '',
    caloriesBurned: 0,
    duration: 0,
    activityImage: 'https://picsum.photos/200',
    workout: ''
  };
}

function saveActivity() {
  if (newActivity.value) {
    users.value.unshift(newActivity.value);
    newActivity.value = null;
  }
}
</script>

<template>
  <button class="button is-primary" @click="addActivity">Add Workout</button>
  <div v-if="newActivity" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Activity</p>
        <button class="delete" aria-label="close" @click="newActivity=null"></button>
      </header>
      <section class="modal-card-body">
        <form @submit.prevent="saveActivity">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Title" v-model="newActivity.username">
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" v-model="newActivity.date">
            </div>
          </div>

          <div class="field">
            <label class="label">Duration</label>
            <div class="control">
              <input class="input" type="text" placeholder="Duration" v-model="newActivity.duration">
            </div>
          </div>

          <div class="field">
            <label class="label">Discription</label>
            <div class="control">
              <input class="input" type="text" placeholder="Where did you go? What did you do?" v-model="newActivity.workout">
            </div>
          </div>

          <div class="field">
            <label class="label">Picture</label>
            <div class="control">
              <input class="input" type="file">
            </div>
          </div>

         <div class="field">
                            <div class="control">
                                <input class="button is-primary" type="submit" value="Save">
                            </div>
                        </div>
        </form>
      </section>
     
    </div>
  </div>
</template>

<style scoped>
.button {
  border-radius: 0.5rem;
  background-color: rgb(232, 146, 160);
  border-color: #dbdbdb;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 21%;
  padding-left: 25%;
  padding-right: 25%;
}

.button.is-primary.is-hovered,
.button.is-primary:hover {
  background-color: rgb(200, 93, 150);
  border-color: transparent;
  color: #fff;
}

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

@media (min-width: 1024px) {
  .Myactivity {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>