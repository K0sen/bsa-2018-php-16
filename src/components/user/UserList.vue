<template>
  <div class="container">
    <!--<UserForm v-bind:user="newUser" v-on:addUser="onAddUser"/>-->
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
import UserForm from "./UserForm";

export default {
  name: "UserList",
  components: {
    UserItem,
  },

  data() {
    return {
    };
  },

    computed: {
    ...mapState("users", ["users"])
  },
};
</script>

<style scoped>
.user-list {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
