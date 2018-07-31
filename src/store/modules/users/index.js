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
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
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