<template>
    <div>
      <OAutocomplete
      v-model="selectedFriend"
      :items="friends"
      :get-label="item => item.name"
      placeholder="Search for a friend..."
      @input="search"
      @select="selectFriend"
    />
    </div>
  </template>
  
  <script>
  //import SimpleTypeahead from 'vue3-simple-typeahead';
  import { OAutocomplete } from '@oruga-ui/oruga-next';
  
  export default {
    components: {
      OAutocomplete
    },
    data() {
      return {
        selectedFriend: null,
        friends: []
      };
    },
    methods: {
      async search(query) {
        const response = await fetch(`/api/friends/search?query=${query}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          this.friends = await response.json();
          return this.friends;
        }
      },
      selectFriend(friend) {
        this.$emit('friend-selected', friend); 
      }
    },
    watch: {
      selectedFriend(newFriend) {
        this.selectFriend(newFriend);
      }
    }
  };
  </script>