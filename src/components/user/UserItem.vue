<template>
  <div class="user-item-container">
    <div class="user-info">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div><img :src="user.avatar" alt="avatar" class="user__avatar"></div>
    </div>
    <div class="nav">
      <router-link :to="`/user/${user.id}`" tag="button" class="btn btn-info">Info</router-link>
      <button @click="onDeleteUser" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
    };
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
