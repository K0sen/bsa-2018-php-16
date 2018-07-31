<template>
  <div class="user-form-control">
    <div>
      <span>Name:</span>
      <input type="text" id="name" v-model.trim="newUser.name">
    </div>
    <div>
      <span>Email:</span>
      <input type="text" id="email" v-model.trim="newUser.email">
    </div>
    <div>
      <span>Avatar link:</span>
      <input type="text" id="avatar" v-model.trim="newUser.avatar">
    </div>
    <button v-if="!user" @click="onAddUser" class="btn btn-success">Add a user</button>
    <button v-else @click="onEditUser(user.id)" class="btn btn-info">Update the user</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        user: null,
        newUser: {
          name: null,
          email: null,
          avatar: null
        }
      };
    },

    created() {
      let user = this.$store.getters['users/getById'](this.id);
      if (user) {
        this.user = user;
        this.newUser = {
          name: user.name,
          email: user.email,
          avatar: user.avatar
        }
      }
    },

    methods: {
      onAddUser: function () {
        if (!this.newUser.name || !this.newUser.email) {
          return;
        }

        this.$store.dispatch('users/addUser', {
          name: this.newUser.name,
          email: this.newUser.email,
          avatar: this.newUser.avatar
        }).then((user) => this.$router.push(`/user/${user.id}`));
      },

      onEditUser(id) {
        if (!this.newUser.name || !this.newUser.email) {
          return;
        }

        this.$store.dispatch("users/editUser", {
          userId: id,
          data: {
            name: this.newUser.name,
            email: this.newUser.email,
            avatar: this.newUser.avatar
          }
        }).then(() => this.$router.push(`/user/${id}`));
      },
    },
  }
</script>

<style scoped>
.user-form-control {
  margin: 0 auto;
  width: 320px;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.user-form-control div {
  margin-bottom: 10px;
}

.user-form-control span {
  display: inline-block;
  width: 80px;
}
</style>