import Vue from 'vue';

let lastId = 30;

const state = {
  albums: [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "natus impedit quibusdam illo est"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "quibusdam autem aliquid et et quia"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "qui fuga est a eum"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "saepe unde necessitatibus rem"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "distinctio laborum qui"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "quam nostrum impedit mollitia quod et dolor"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "consequatur autem doloribus natus consectetur"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "ab rerum non rerum consequatur ut ea unde"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "ducimus molestias eos animi atque nihil"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "ut pariatur rerum ipsum natus repellendus praesentium"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "voluptatem aut maxime inventore autem magnam atque repellat"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "aut minima voluptatem ut velit"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "nesciunt quia et doloremque"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "velit pariatur quaerat similique libero omnis quia"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "voluptas rerum iure ut enim"
    },
    {
      "userId": 3,
      "id": 21,
      "title": "repudiandae voluptatem optio est consequatur rem in temporibus et"
    },
    {
      "userId": 3,
      "id": 22,
      "title": "et rem non provident vel ut"
    },
    {
      "userId": 3,
      "id": 23,
      "title": "incidunt quisquam hic adipisci sequi"
    },
    {
      "userId": 3,
      "id": 24,
      "title": "dolores ut et facere placeat"
    },
    {
      "userId": 3,
      "id": 25,
      "title": "vero maxime id possimus sunt neque et consequatur"
    },
    {
      "userId": 3,
      "id": 26,
      "title": "quibusdam saepe ipsa vel harum"
    },
    {
      "userId": 3,
      "id": 27,
      "title": "id non nostrum expedita"
    },
    {
      "userId": 3,
      "id": 28,
      "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
    },
    {
      "userId": 3,
      "id": 29,
      "title": "inventore ut quasi magnam itaque est fugit"
    },
    {
      "userId": 3,
      "id": 30,
      "title": "tempora assumenda et similique odit distinctio error"
    },
  ]
};

const getters = {
  getAlbumsWithUsers: (state, getters, rootState, rootGetters) => userId => {
    let albums = state.albums.map((album) => {
      let user = rootGetters['users/getById'](album.userId);
      if (user && (!userId || userId === album.userId)) {

        return {...album, user: user}
      }
    });

    // Clears from undefined...
    return albums.filter((a) => {
      return a !== undefined;
    });
  },

  getById: (state, getters, rootState, rootGetters) => id => {
    for (let i in state.albums) {
      if (state.albums[i].id === parseInt(id)) {
        let user = rootGetters['users/getById'](state.albums[i].userId);
        return {...state.albums[i], user: user};
      }
    }

    return null;
  }
};

const mutations = {
  ADD_ALBUM(state, album) {
    state.albums.push({
      id: ++lastId,
      title: album.title,
      userId: album.userId,
    });
  },

  DELETE_ALBUM(state, albumId) {
    const ind = state.albums.findIndex(album => album.id === albumId);

    if (ind !== -1) {
      state.albums.splice(ind, 1);
    }
  },

  EDIT_ALBUM(state, { albumId, data }) {
    const ind = state.albums.findIndex(album => album.id === albumId);

    if (ind !== -1) {
      const updatedAlbum = {
        id: albumId,
        title: data.title,
        userId: data.userId
      };

      Vue.set(state.albums, ind, updatedAlbum);
    }
  },
};

const actions = {
  addAlbum({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_ALBUM', data);
        resolve(state.albums[state.albums.length - 1]);
      }, 250);
    });
  },

  deleteAlbum({ commit }, albumId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_ALBUM', albumId);
        resolve();
      }, 250);
    });
  },

  editAlbum({ commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('EDIT_ALBUM', data);
        resolve();
      }, 250);
    });
  },

  loadAlbums({ commit }, albums) {
    for (let album of albums) {
        commit('ADD_ALBUM', album);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};