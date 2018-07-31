<template>
  <div class="container">
    <div class="user-search">
      <input type="text"
             placeholder="Name"
             v-model="searchName">
      <input type="email"
             placeholder="Email"
             v-model="searchEmail">
      <button class="btn btn-info" @click="searchUsers">Search users</button>
    </div>
    <div v-if="users" class="user-list">
      <template v-for="user in users">
        <UserItem :key="user.id" :user="user" />
      </template>
    </div>
    <div v-else class="user-list">
      No users :(
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserItem from "./UserItem";

export default {
  name: "UserList",
  components: {
    UserItem,
  },

  data() {
    return {
      users: this.$store.state.users.users,
      searchName: '',
      searchEmail: ''
    };
  },

  methods: {
    searchUsers() {
      this.users = this.$store.getters['users/searchUsers'](this.searchName, this.searchEmail);
    }
  },

  // computed: {
  //   ...mapState("users", ["users"])
  // },
};
</script>

<style scoped>
  .user-list {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .user-search input {
    display: block;
  }
</style>
