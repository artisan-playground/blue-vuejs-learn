<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li><router-link to="/profile">PART 1 PROFILE </router-link></li>
    <li><router-link to="/edu">PART 2 EDUCATION </router-link></li>
    <li><router-link to="/activity">PART 3 ACTIVITY</router-link></li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #FFFFFF
;
}
</style>
