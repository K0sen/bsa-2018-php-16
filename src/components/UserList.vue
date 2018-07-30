<template>
  <div class="users-container">
    <div class="nav">
      <div class="form-control">
        <span>Name:</span>
        <input type="text" id="name" v-model.trim="newUser.name">
      </div>
      <div class="form-control">
        <span>Email:</span>
        <input type="text" id="email" v-model.trim="newUser.email">
      </div>
      <div class="form-control">
        <span>Avatar link:</span>
        <input type="text" id="avatar" v-model.trim="newUser.avatar">
      </div>
      <button @click="onAddUser">Add user</button>
    </div>  
    <div class="user-list">
      <template v-for="user in users">
        <UserItem :key="user.id" :user="user" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserItem from "./UserItem";
import axios from "axios";

export default {
  name: "UserList",
  components: {
    UserItem
  },

  data() {
    return {
      newUser: {
        name: '',
        email: '',
        avatar: ''
      }
    };
  },


  beforeCreate() {
      axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(response => {
              this.$store.dispatch("users/loadUsers", response.data.reverse());
          })
          .catch(error => console.log(error));
  },

    computed: {
    ...mapState("users", ["users"])
  },

  methods: {
    onAddUser() {
      if (!this.newUser.name || !this.newUser.email) {
        return;
      }
      
      this.$store.dispatch('users/addUser', this.newUser);
      this.clearAddForm();
    },

    clearAddForm() {
      this.newUser = {
        name: '',
        email: '',
        avatar: ''
      };
    }
  }
};
</script>

<style scoped>
.users-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 45px;
}

.user-list {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.form-control {
  width: 250px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
