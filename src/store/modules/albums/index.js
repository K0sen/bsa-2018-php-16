import Vue from 'vue';

let lastId = 0;

const state = {
  albums: []
};

const getters = {
  // // state is module's local state
  // sortedByName: state => {
  //   return state.users.sort((a, b) => a.name < b.name);
  // },

  getById: state => id => {
    for (let i in state.albums) {
      if (state.albums[i].id === parseInt(id)) {
        return state.albums[i];
      }
    }
    return null;
  }
};

const mutations = {
  ADD_USER(state, album) {
    state.users.push({
      id: ++lastId,
      name: user.name,
      email: user.email,
      avatar: user.avatar ? user.avatar : `https://randomuser.me/api/portraits/men/${lastId}.jpg`
    });
  },
  //
  // DELETE_USER(state, userId) {
  //   const ind = state.users.findIndex(user => user.id === userId);
  //
  //   if (ind !== -1) {
  //     state.users.splice(ind, 1);
  //   }
  // },
  //
  // EDIT_USER(state, { userId, data }) {
  //   const ind = state.users.findIndex(user => user.id === userId);
  //
  //   if (ind !== -1) {
  //     const updatedUser = {
  //       id: userId,
  //       name: data.name,
  //       email: data.email,
  //       avatar: data.email !== '' ? data.avatar : `https://randomuser.me/api/portraits/men/${lastId}.jpg`
  //     };
  //
  //     Vue.set(state.users, ind, updatedUser);
  //   }
  // },
};

const actions = {
  // // first param is context object
  // addUser({ state, commit, rootState }, data) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       commit('ADD_USER', data);
  //       resolve(state.users[state.users.length - 1]);
  //     }, 250);
  //   });
  // },
  //
  // deleteUser({ commit }, userId) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       commit('DELETE_USER', userId);
  //       resolve();
  //     }, 250);
  //   });
  // },
  //
  // editUser({ commit }, data) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       commit('EDIT_USER', data);
  //       resolve();
  //     }, 250);
  //   });
  // },

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