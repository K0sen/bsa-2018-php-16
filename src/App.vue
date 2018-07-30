<template>
  <div id="app">
    <ul>
      <li><router-link to="/parent">/parent</router-link></li>
      <li><router-link to="/parent/foo">/parent/foo</router-link></li>
      <li><router-link to="/parent/bar">/parent/bar</router-link></li>
      <li><router-link to="/baz">/baz</router-link></li>
    </ul>
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "./components/UserList";

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
