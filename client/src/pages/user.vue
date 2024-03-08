<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, getUsers } from "@/model/users";

    const users = ref([] as User[])
    const selectedUser = ref(null as User | null)
    const isModalOpen = ref(false)

    users.value = getUsers();

    function removeUser(user: User){
        users.value = users.value.filter(u => u.id !== user.id);
    }

    function editUser(user: User){
        selectedUser.value = user
        isModalOpen.value = true
    }

    function closeModal(){
        selectedUser.value = null
        isModalOpen.value = false
    }
    
</script>

<template>   
  <div class="columns is-centered">
    <div class="column box has-shadow is-rounded" style="margin-top: 20px;">
      <button class="button is-primary" style="margin-bottom: 10px;">
        Add Admin
      </button>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Emails</th>
            <th>Username</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><img class="user-image-is-small" :src="user.image" style="width: 50px; height: 50px;"></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.age }}</td>
            <td>
              <button class="button" @click="editUser(user)">
                <i class="fas fa-edit"></i> 
              </button>
              <button class="button" @click="removeUser(user)">
                <i class="fas fa-trash-alt"></i> 
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- BEGIN: Modal Card -->
  <div class="modal" v-if="isModalOpen">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit User</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p>Selected User: {{ selectedUser?.firstName }} {{ selectedUser?.lastName }}</p>
        <div v-if="selectedUser">
          <input v-model="selectedUser.firstName" type="text" placeholder="First Name">
          <input v-model="selectedUser.lastName" type="text" placeholder="Last Name">
          <input v-model="selectedUser.email" type="email" placeholder="Email">
          <input v-model="selectedUser.username" type="text" placeholder="Username">
          <input v-model="selectedUser.age" type="number" placeholder="Age">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="closeModal">Save changes</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
  <!-- END: Modal Card -->
</template>

<style scoped>
  .table {
    margin-top: 20px;
  }

  button.is-primary.is-hovered, .button.is-primary:hover {
    background-color: rgb(200, 93, 150);
    border-color: transparent;
    color: #fff;
  }

  .button.is-primary {
    background-color: rgb(223, 145, 158);
    border-color: transparent;
    color: #fff;
  } 

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-card {
    width: 400px;
  }
</style>
