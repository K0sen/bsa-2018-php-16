<template>
  <div v-if="album" class="user-item-container">
    <h2>Info about album #{{ album.id }}</h2>
    <div class="user-info">
      <div>{{ album.title }}</div>
      <router-link :to="`/user/${album.user.id}`" >User: {{ album.user.name }}</router-link>
      <div><img :src="album.user.avatar" alt="avatar" class="user__avatar"></div>
    </div>
    <div class="nav">
      <router-link :to="`/album/${album.id}/edit`" tag="button" class="btn btn-info">Update</router-link>
      <button class="btn btn-danger" @click="onDeleteAlbum">Delete</button>
    </div>
    <div v-if="photos.length" class="album-photos-wrap">
      <div>Photos:</div>
      <div class="album-photos">
        <div v-for="photo in photos" class="album-photo">
          <div class="title">{{ photo.title }}</div>
          <img :src="photo.url" alt="photo">
          <button class="btn btn-danger" @click="onDeletePhoto(photo.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    No albums. Go to the main page to load some.
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "UserView",
  data() {
    return {
      id: this.$route.params.id,
      album: {},
      photos: []
    }
  },

  created() {
    this.album = this.getById(this.id);
    this.photos = this.getByAlbumId(this.id);
    console.log(this.photos);
  },

  computed: {
    ...mapGetters("albums", ["getById"]),
    ...mapGetters("photos", ["getByAlbumId"]),
    ...mapState("users", ["users"]),
  },

  methods: {
    onDeleteAlbum() {
      this.$store.dispatch("albums/deleteAlbum", this.album.id)
        .then(() => this.$router.push(`/albums`));
    },

    onDeletePhoto(id) {
      this.$store.dispatch("photos/deletePhoto", id)
      // is it correct to update photos like that?.. TODO
        .then(() => this.photos = this.getByAlbumId(this.id));
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

  .album-photos-wrap {
    margin-top: 50px;
  }

  .album-photos {
    display: flex;
    flex-direction: row;
  }

  .album-photo {
    width: 500px;
    margin: 1%;
    padding: 25px;
    text-align: center;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .album-photo img {
    max-width: 250px;
  }

  .album-photo button {
    padding-top: 20px;
    display: flex;
    margin: 0 auto;
  }
</style>
