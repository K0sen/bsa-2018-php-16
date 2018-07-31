<template>
  <div class="user-item-container">
    <div v-if="isEdit" class="user-edit-form">
      <div class="form-control">
        <input type="text" id="name" v-model.trim="name">
      </div>
      <div class="form-control">
        <input type="text" id="email" v-model.trim="email">
      </div>
      <div class="form-control">
        <input type="text" id="avatar" v-model.trim="avatar">
      </div>
    </div>
    <div v-else class="user-info">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div><img :src="user.avatar" alt="avatar" class="user__avatar"></div>
    </div>
    <div class="nav">
      <button v-show="!isEdit" @click="toggleEditForm(!isEdit)">Edit</button>
      <button v-show="isEdit" @click="onEditUser">Save</button>
      <button @click="onDeleteUser" :disabled="isEdit">Delete</button>
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
      isEdit: false,
      name: this.user.name || "",
      email: this.user.email || "",
      avatar: this.user.avatar || "",
    };
  },

  methods: {
    toggleEditForm(value) {
      this.isEdit = value;
    },

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
