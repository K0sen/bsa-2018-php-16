import Vue from 'vue';
import Router from 'vue-router';
import UserList from './components/user/UserList';
import AlbumList from './components/album/AlbumList';

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/users"
    },
    {
      path: "/users",
      component: UserList
    },
    {
      path: "/albums",
      component: AlbumList
    },
  ]
});
