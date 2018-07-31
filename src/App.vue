<template>
  <div id="app">
    <nav>
      <ul class="navbar">
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/user/add">Add a user</router-link></li>
        <li><router-link to="/albums">Albums</router-link></li>
        <li><router-link to="/album/add">Add an album</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import UserList from "./components/user/UserList";

export default {
  name: "App",
  components: {
    UserList
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e6e6e6;
}

.navbar {
  margin-left: 150px;
  padding-top: 15px;
  justify-content: flex-start;
}

.navbar li {
  list-style: none;
  margin-right: 20px;
}

.navbar li a {
  color: black;
}
</style>
