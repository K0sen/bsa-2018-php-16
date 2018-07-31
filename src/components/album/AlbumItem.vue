<template>
  <div class="album-item-container">
    <div class="album-info">
      <div>Title: {{ album.title }}</div>
      <div>User: {{ album.user.name }}</div>
    </div>
    <div class="nav">
      <!--<button @click="onDeleteAlbum">Delete</button>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
    };
  },

  created() {
  },

  methods: {
    onEditUser() {
      if (!this.name || !this.email) {
        return;
      }

      this.toggleEditForm(false);

      const data = {
        userId: this.user.id,
        data: {
          name: this.name,
          email: this.email,
          avatar: this.avatar
        }
      };

      this.$store.dispatch("users/editUser", data);
    },

    onDeleteUser() {
      this.$store.dispatch("users/deleteUser", this.user.id);
    }
  }
};
</script>

<style scoped>
.album-item-container {
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
</style>
