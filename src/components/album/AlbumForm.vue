<template>
  <div class="nav">
    <div class="form-control">
      <span>Name:</span>
      <input type="text" id="name" v-model.trim="user.name">
    </div>
    <div class="form-control">
      <span>Email:</span>
      <input type="text" id="email" v-model.trim="user.email">
    </div>
    <div class="form-control">
      <span>Avatar link:</span>
      <input type="text" id="avatar" v-model.trim="user.avatar">
    </div>
    <button @click="onAddUser">Add user</button>
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

    methods: {
      onAddUser: function () {
        this.$emit('addUser', this.user);
      }
    },
    // data() {
    //   return {
    //     newUser: {
    //       name: '',
    //       email: '',
    //       avatar: ''
    //     }
    //   };
    // },
  }
</script>

<style scoped>
.form-control {
  width: 270px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
</style>