<template>

<div id="nav">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about'}">About</router-link>
    <router-link :to="{ name: 'paints'}">Paints</router-link>
  </nav>
</div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
  <router-view/>
</template>

<script>

export default {
  methods: {
    redirect() {},
    back() {},
    forward() {}
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;

}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
