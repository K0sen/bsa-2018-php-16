<template>
  <div>
    <div class="album-form-control">
      <div>
        <span>Title:</span>
        <input class="form-control" type="text" id="title" v-model.trim="newAlbum.title">
      </div>
      <select class="form-control" id="user-select" v-model="newAlbum.userId">
        <option :value="null">Choose user</option>
        <option v-for="user in users" v-bind:value="user.id">
          {{ user.name }}
        </option>
      </select>
      <button v-if="!album" @click="onAddAlbum" class="btn btn-success">Add an album</button>
      <button v-else @click="onEditAlbum(album.id)" class="btn btn-info">Update the album</button>
    </div>
    <div class="photo-form-control">
      <div>
        <label for="photo-title">Photo title</label>
        <input class="form-control" type="text" id="photo-title" v-model.trim="newPhoto.title">
      </div>
      <div>
        <label for="photo-url">Photo url</label>
        <input class="form-control" type="text" id="photo-url" v-model.trim="newPhoto.url">
      </div>
      <button @click="onAddPhoto" class="btn btn-success">Add a photo</button>
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
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      album: null,
      photos: [],
      newPhoto: {
        title: null,
        url: null,
        albumId: parseInt(this.$route.params.id)
      },
      newAlbum: {
        title: null,
        userId: null,
      }
    };
  },

  created() {
    this.photos = this.getByAlbumId(this.id);
    let album = this.$store.getters['albums/getById'](this.id);
    if (album) {
      this.album = album;
      this.newAlbum = {
        title: album.title,
        userId: album.userId,
      }
    }
  },

  computed: {
    ...mapState("users", ["users"]),
    ...mapGetters("photos", ["getByAlbumId"]),
  },

  methods: {
    onAddAlbum: function () {
      if (!this.newAlbum.title || !this.newAlbum.userId) {
        return;
      }

      this.$store.dispatch('albums/addAlbum', {
        title: this.newAlbum.title,
        userId: this.newAlbum.userId,
      }).then((album) => this.$router.push(`/album/${album.id}`));
    },

    onEditAlbum(id) {
      if (!this.newAlbum.title || !this.newAlbum.userId) {
        return;
      }

      this.$store.dispatch("albums/editAlbum", {
        albumId: id,
        data: {
          title: this.newAlbum.title,
          userId: this.newAlbum.userId,
        }
      }).then(() => this.$router.push(`/album/${id}`));
    },

    onDeletePhoto(id) {
      this.$store.dispatch("photos/deletePhoto", id)
      // is it correct to update photos like that?.. TODO
        .then(() => this.photos = this.getByAlbumId(this.id));
    },

    onAddPhoto: function () {
      if (!this.newPhoto.title) {
        return;
      }

      this.$store.dispatch('photos/addPhoto', {
        title: this.newPhoto.title,
        url: this.newPhoto.url,
        albumId: this.newPhoto.albumId,
      }).then(() => this.photos = this.getByAlbumId(this.id));
    },
  },
}
</script>

<style scoped>
  .album-form-control {
    margin: 0 auto;
    width: 320px;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }

  .album-form-control * {
    margin-bottom: 10px;
  }

  .photo-form-control {
    margin: 0 auto;
    width: 320px;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }

  .album-photos-wrap {
    margin-top: 50px;
    text-align: center;
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