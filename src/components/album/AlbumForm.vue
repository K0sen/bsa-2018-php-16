<template>
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
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      album: null,
      newAlbum: {
        title: null,
        userId: null,
      }
    };
  },

  created() {
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
    ...mapState("users", ["users"])
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
</style>