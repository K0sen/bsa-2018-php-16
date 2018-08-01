import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import albums from './modules/albums';
import photos from './modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    users,
    albums,
    photos
  }
});