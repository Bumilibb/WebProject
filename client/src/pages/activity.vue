<script setup lang="ts">
import AddActivityCard from '@/components/AddCard.vue';

</script>

<template>

    <AddActivityCard />

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="image is-rounded"  alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="box">
            <div class="media-right">
              <figure class="image is-5by3">
                <img  alt="Activity Image">
              </figure>
              <div class="media-content">
                <div class="post-header">
                  <strong class="post-author">{{  }}</strong>
                  <small class="post-date">{{  }}</small>
                </div>
                <div class="post-body">
                  <br>
                
                  <div class="post-details">
                    <p class="post-description">
                  <strong>Status: </strong>  {{  }}
                  </p>
                  <p class="post-description">
                    <strong>calories Burned:</strong> {{  }} calories!
                  </p>
                    <p><span class="label">Duration:</span> {{  }}</p>
                    <p><span class="label">Workout Type:</span> {{  }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-right">
          <button class="delete" @click=""></button> 
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

