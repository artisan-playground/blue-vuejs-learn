<template>
  <div id="app">
    <header>
    <HelloWorld msg="Welcome to Blue's Portfolio" />
    </header>
    <router-view />
    <footer>N A T T A P H A T Y A D F U N G</footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
    this.getAPIVersion()
  },
  methods: {
    getAPIVersion() {
      axios
        .get('/api/version')
        .then(response => {
          console.log(`version=${response.data}`)
        })
        .catch(error => {
          console.error('error:', error.status, error)
        })
    },
  },
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto;
  border-radius: 10px;
  background-color: #000000;
  color: white;
  text-align: center;
  width: 100%;
  padding: 2px;
  max-width: 100rem auto;
  font-size: larger;
}
footer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto ;
  border-radius: 10px;
  background-color: #000000;
  color: white;
  text-align: center;
  width: 100%;
  padding: 15px;
  max-width: 100rem auto;
  font-size: larger;
}
</style>
