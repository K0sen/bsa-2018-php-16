<template>
  <div class="album-item-container">
    <div class="album-info">
      <div>Title: {{ album.title }}</div>
      <div>User: {{ album.user.name }}</div>
      <div><img :src="album.user.avatar" alt="avatar" class="user__avatar"></div>
    </div>
    <div class="nav">
      <router-link :to="`/album/${album.id}`" tag="button" class="btn btn-info">Info</router-link>
      <button class="btn btn-danger " @click="onDeleteAlbum">Delete</button>
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
    onDeleteAlbum() {
      this.$store.dispatch("albums/deleteAlbum", this.album.id);
      // only that way it triggers updating albums
      this.$emit('getUpdatedAlbums')
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
