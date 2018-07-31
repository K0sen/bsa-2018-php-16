import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import albums from './modules/albums';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    users,
    albums
  }
});