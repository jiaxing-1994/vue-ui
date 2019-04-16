<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
}
input{
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  padding-left: 10px;
}
input:focus{
  outline: none;
}
ul,li{
  list-style:none;
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
