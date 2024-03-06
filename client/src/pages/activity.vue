<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
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
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" @click="closeModal">Cancel</button>
    </footer>
  </div>
</div>
    
      <div class="block">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Today
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="ri-corner-right-down-line"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
    
              <div class="columns">
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">DISTANCE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">TIME</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">PACE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">CALORIES</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    
      <div class="block">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              This Week
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="ri-corner-right-down-line"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
    
              <div class="columns">
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">DISTANCE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">TIME</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">PACE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">CALORIES</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    
      <div class="block">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              This Year
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="ri-corner-right-down-line"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
    
              <div class="columns">
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">DISTANCE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">TIME</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
                <div class="column">
                  <div class="block">
                    <h3 class="title is-5 center">PACE</h3>
                    <div class="center">0.0</div>
                  </div>
                  <div class="block">
                    <h3 class="title is-5 center">CALORIES</h3>
                    <div class="center">0.0</div>
                  </div>
                </div>
              </div>
    
            </div>
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
</style>
