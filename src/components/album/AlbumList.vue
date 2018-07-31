<template>
  <div class="users-container">
    <UserForm v-bind:user="newUser" v-on:addUser="onAddUser"/>
    <div class="user-list">
      <template v-for="user in users">
        <UserItem :key="user.id" :user="user" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserItem from "./AlbumItem";
import UserForm from "./AlbumForm";
import axios from "axios";

export default {
  components: {
    UserItem,
    UserForm
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

  created() {
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
    onAddUser(user) {
      if (!user.name || !user.email) {
        return;
      }

      this.$store.dispatch('users/addUser', user);
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
  width: 270px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
