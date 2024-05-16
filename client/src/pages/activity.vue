<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import AddActivityCard from '@/components/AddCard.vue';
import * as activityServices from '@/services/activityServices';
import ActivityCard from '@/components/ActivityCard.vue';
//import FriendSearch from '@/components/FriendSearch.vue';
import store from '@/viewModel/store';
import type Activity from '@/model/activities';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { OAutocomplete } from '@oruga-ui/oruga-next';


const router = useRouter();
if(store.getters.getToken() === '')
  router.push('/login')

const toast = useToast();
const token = computed(()=>store.getters.getToken());
const pic_url = computed(()=>store.getters.getPicture());
let userActivities = ref<Activity[]>([]);
let selectedFriend = ref<string | number | undefined>(''); // Initialize with an empty string
let friends = ref([]);

type FriendType = {
  name: string;
 
};


onMounted(()=>{
  updateActivities();
})

async function search(query: string | number) { // Change the type of query to string | number
  if (typeof query === 'string') {
    const response = await fetch(`/api/friends/search?query=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      friends.value = await response.json();
      return friends.value;
    }
  }
}

function selectFriend(friend: any) { // Replace 'any' with the actual type of a friend
  selectedFriend.value = friend;
}

function updateActivities(){
  activityServices.getActivitiesAPI().then(response=>{
    let activities = response.currentUserActivities;
    userActivities.value = activities.filter((activity:Activity)=>{
      return activity.ownerUsername === store.getters.getUser().username;
    })  
  })

}

function deleteMyActivity(postID:any){
  activityServices.deleteActivityAPI(postID).then((response)=>{
    if(response.message == 'success'){
      updateActivities(); 
      toast('Deleted an actvity')
    }
  })
}

</script>

<template>
    <OAutocomplete
      v-model="selectedFriend"
      :items="friends"
      :get-label="(item: FriendType) => item.name"
      placeholder="Search for a friend..."
      @input="search"
      @select="selectFriend"
    />

    <AddActivityCard v-on:update-activities="updateActivities()" />
    <ActivityCard v-on:delete-activity="deleteMyActivity($event)" :activities ="userActivities" />

  
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