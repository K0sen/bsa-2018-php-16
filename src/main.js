import Vue from "vue";
import App from "./App";
import store from './store';
import router from './router';
import axios from "axios";

new Vue({
  el: "#app",
  render: createEl => createEl(App),
  router,
  store,
});

// Why mutations is UPPER_CASE
// data in storage is const
// Cannot use src attr on img, should use :src