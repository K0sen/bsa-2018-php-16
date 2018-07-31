<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/albums">Albums</router-link></li>
      </ul>
    </nav>
    <UserList></UserList>
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
</style>
