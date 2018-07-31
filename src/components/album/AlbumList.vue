<template>
  <div class="container">
    <!--<div class="user-search">-->
      <!--<input type="text"-->
             <!--placeholder="Name"-->
             <!--v-model="searchName">-->
      <!--<input type="email"-->
             <!--placeholder="Email"-->
             <!--v-model="searchEmail">-->
      <!--<button class="btn btn-info" @click="searchUsers">Search users</button>-->
    <!--</div>-->
    <div class="album-list">
      <template v-for="album in albums">
        <AlbumItem :key="album.id" :album="album" />
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
      albums: null
    };
  },

  created() {
    this.albums = this.getAlbumsWithUsers;
  },

  computed: {
    ...mapGetters("albums", ["getAlbumsWithUsers"])
  },
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
