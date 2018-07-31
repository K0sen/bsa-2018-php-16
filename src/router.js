import Vue from 'vue';
import Router from 'vue-router';
import UserList from './components/user/UserList';
import UserView from './components/user/UserView';
import UserForm from './components/user/UserForm';
import AlbumList from './components/album/AlbumList';
import AlbumView from './components/album/AlbumView';
import AlbumForm from './components/album/AlbumForm';

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
    {
      path: "/album/add",
      component: AlbumForm
    },
    {
      path: "/album/:id",
      component: AlbumView
    },
    {
      path: "/album/:id/edit",
      component: AlbumForm
    },
  ]
});
