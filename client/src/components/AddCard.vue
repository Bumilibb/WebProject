<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { refUsers, deleteActivity, saveUser} from '@/viewModel/session'

const showModal = ref(false);
const type = ref(''); 
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};


const emit = defineEmits(['add-activity']);
const showForm = ref(false);
const workout = ref({
    title: '',
    date: '',
    activityImage: '',
    location: "",
    duration: 0

});
const addWorkout = () => {
  emit('add-activity', workout.value);
  workout.value = {
    title: '',
    date: '',
    activityImage: '',
    location: '',
    duration: 0
 
  };
  closeModal(); // Close the first modal and open the confirmation modal
};

function toggleForm() {
  showForm.value = !showForm.value;
}

</script>

<template>
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
                  <input class="input" type="text" placeholder="Title" v-model="workout.title">
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" type="date" v-model="workout.date">
                </div>
              </div>

              <div class="field">
                <label class="label">Duration</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Duration" v-model="workout.duration">
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Location" v-model="workout.location">
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
            <button class="button s" @click="closeModal">Save changes</button>
          </footer>



          
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