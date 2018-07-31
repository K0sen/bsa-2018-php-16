import Vue from "vue";
import App from "./App";
import store from './store';
import router from './router';
import axios from "axios";

new Vue({
  el: "#app",
  render: createEl => createEl(App),

  created() {
    // ===== Have problems with load that kind of... TODO

    // // load users
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     this.$store.dispatch("users/loadUsers", response.data);
    //   })
    //   .catch(error => console.log(error));
    // // load albums
    // axios
    //   .get("https://jsonplaceholder.typicode.com/albums")
    //   .then(response => {
    //     this.$store.dispatch("albums/loadAlbums", response.data);
    //   })
    //   .catch(error => console.log(error));
    // load pictures
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then(response => {
    //     this.$store.dispatch("pictires/loadUsers", response.data);
    //   })
    //   .catch(error => console.log(error));
  },

  router,
  store,
});

// TODO
// Why mutations is UPPER_CASE? convention?
// why to name a components?
// how to call getters correctly?
// why data in storage is const ??
// while axios => users is loading on main page so at start u cannot go to /user/1 => how to correctly load start data ?
// i have to mock album because they don't mapped if loaded from axios and their count = 100
// Cannot use src attr on img, should use :src