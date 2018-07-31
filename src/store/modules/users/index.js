import Vue from 'vue';

let lastId = 3;

// local state
const state = {
  users: [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ]
};

const getters = {
  searchUsers: state => (name, email) => {
    console.log(name, email);
    return state.users.filter(user => {
      return (
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase())
      );
    });
  },

  getById: state => id => {
    for (let i in state.users) {
      if (state.users[i].id === parseInt(id)) {
        return state.users[i];
      }
    }
    return null;
  }
};

const mutations = {
  ADD_USER(state, user) {
    state.users.push({
      id: ++lastId,
      name: user.name,
      email: user.email,
      avatar: user.avatar ? user.avatar : `https://randomuser.me/api/portraits/men/${lastId}.jpg`
    });
  },

  DELETE_USER(state, userId) {
    const ind = state.users.findIndex(user => user.id === userId);

    if (ind !== -1) {
      state.users.splice(ind, 1);
    }
  },

  EDIT_USER(state, { userId, data }) {
    const ind = state.users.findIndex(user => user.id === userId);

    if (ind !== -1) {
      const updatedUser = {
        id: userId,
        name: data.name,
        email: data.email,
        avatar: data.email !== '' ? data.avatar : `https://randomuser.me/api/portraits/men/${lastId}.jpg`
      };

      Vue.set(state.users, ind, updatedUser);
    }
  },
};

const actions = {
  // first param is context object
  addUser({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_USER', data);
        resolve(state.users[state.users.length - 1]);
      }, 250);
    });
  },

  deleteUser({ commit }, userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_USER', userId);
        resolve();
      }, 250);
    });
  },

  editUser({ commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('EDIT_USER', data);
        resolve();
      }, 250);
    });
  },

  loadUsers({ commit }, users) {
    for (let user of users) {
        commit('ADD_USER', user);
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