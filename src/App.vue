<template>
  <div id="app">
    <Nav/>
    <AllProducts/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import AllProducts from "@/components/AllProducts";

export default {
  name: 'App',
  components: {
    AllProducts,
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: 2px solid blue;
}
</style>
