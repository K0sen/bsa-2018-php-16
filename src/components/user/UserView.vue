<template>
  <div v-if="user" class="user-item-container">
    <h2>Info about #{{ user.id }}</h2>
    <div class="user-info">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div><img :src="user.avatar" alt="avatar" class="user__avatar"></div>
    </div>
    <div class="nav">
      <router-link :to="`/user/${user.id}/edit`" tag="button" class="btn btn-info">Update</router-link>
      <button class="btn btn-danger" @click="onDeleteUser">Delete</button>
    </div>
  </div>
  <div v-else class="container">
    No users. Go to the main page to load some.
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },

  created() {
    this.user = this.$store.getters['users/getById'](this.id);
  },

  methods: {
    onDeleteUser() {
      this.$store.dispatch("users/deleteUser", this.user.id);
    }
  }
};
</script>

<style scoped>
  .user-item-container {
    flex-grow: 1;
    margin: 1%;
    padding: 25px;
    text-align: center;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .nav {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }

  .nav button {
    padding: 5px 15px;
    margin-right: 5px;
  }

  .user__avatar {
    max-width: 200px;
  }
</style>
