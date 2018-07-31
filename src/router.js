import Vue from 'vue';
import Router from 'vue-router';
import UserList from './components/user/UserList';
import UserView from './components/user/UserView';
import UserForm from './components/user/UserForm';
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
      path: "/user/add",
      component: UserForm
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/user/:id/edit",
      component: UserForm
    },
    {
      path: "/albums",
      component: AlbumList
    },
  ]
});
