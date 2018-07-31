<template>
  <div class="container">
    <div class="album-filter">
      <label for="user-select">Select user</label>
      <select id="user-select" v-model="userId" @change="getUpdatedAlbums">
        <option :value="null">Choose user</option>
        <option v-for="user in users" v-bind:value="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>
    <div class="album-list">
      <template v-for="album in albums">
        <AlbumItem v-on:getUpdatedAlbums="getUpdatedAlbums" :key="album.id" :album="album" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AlbumItem from "./AlbumItem";

export default {
  name: "AlbumList",
  components: {
    AlbumItem,
  },

  data() {
    return {
      albums: null,
      userId: null
    };
  },

  created() {
    this.getUpdatedAlbums();
  },

  computed: {
    ...mapGetters("albums", ["getAlbumsWithUsers"]),
    ...mapState("users", ["users"])
  },

  methods: {
    getUpdatedAlbums() {
      this.albums = this.getAlbumsWithUsers(this.userId);
    }
  }
};
</script>

<style scoped>
  .album-list {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
