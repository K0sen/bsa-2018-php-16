<template>
  <div v-if="album" class="user-item-container">
    <h2>Info about #{{ album.id }}</h2>
    <div class="user-info">
      <div>{{ album.title }}</div>
      <router-link :to="`/user/${album.userId}`" >User Id: {{ album.userId }}</router-link>
    </div>
    <div class="nav">
      <!--<router-link :to="`/user/${user.id}/edit`" tag="button" class="btn btn-info">Update</router-link>-->
      <button class="btn btn-danger" @click="onDeleteAlbum">Delete</button>
    </div>
  </div>
  <div v-else class="container">
    No users. Go to the main page to load some.
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "UserView",
  data() {
    return {
      id: this.$route.params.id,
      album: {}
    }
  },

  created() {
    this.album = this.getById(this.id);
  },

  computed: {
    ...mapGetters("albums", ["getById"]),
  },

  methods: {
    onDeleteAlbum() {
      this.$store.dispatch("albums/deleteAlbum", this.album.id)
        .then(() => this.$router.push(`/albums`));
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
