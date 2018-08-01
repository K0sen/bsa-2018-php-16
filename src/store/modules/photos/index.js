import Vue from 'vue';

let lastId = 6;

const state = {
  photos: [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "albumId": 2,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 3,
      "id": 3,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 4,
      "id": 4,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 5,
      "id": 5,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
  ]
};

const getters = {
  getByAlbumId: state => albumId => {
    return state.photos.filter((photo) => photo.albumId === parseInt(albumId));
  }
};

const mutations = {
  ADD_PHOTO(state, photo) {
    state.photos.push({
      id: ++lastId,
      title: photo.title,
      albumId: photo.albumId,
      url: photo.url ? photo.url : `https://randomuser.me/api/portraits/men/${lastId + 40}.jpg`,
    });
  },

  DELETE_PHOTO(state, photoId) {
    const ind = state.photos.findIndex(photo => photo.id === photoId);

    if (ind !== -1) {
      state.photos.splice(ind, 1);
    }
  },
};

const actions = {
  addPhoto({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_PHOTO', data);
        resolve(state.photos[state.photos.length - 1]);
      }, 250);
    });
  },

  deletePhoto({ commit }, photoId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_PHOTO', photoId);
        resolve();
      }, 250);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};