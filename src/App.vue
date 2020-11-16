<template>
  <div id="app">
    <AllCartItems :all-carts="cartItems"/>
    <Nav/>
    <select v-model="filterOption">
      <option value="1">Price: Low to High</option>
      <option value="2">Price: High to Low</option>
      <option value="3">Title</option>
    </select>
    <AllProducts :option="filterOption" :add-to-cart="addToCart"/>

  </div>
</template>

<script>
import Nav from "@/components/Nav";
import AllProducts from "@/components/AllProducts";
import AllCartItems from "@/components/AllCartItems";

export default {
  name: 'App',
  data () {
    return {
      filterOption: 1,
      cartItems: []
    }
  },
  components: {
    AllCartItems,
    AllProducts,
    Nav
  },
  methods: {
    addToCart(newItem) {
      let existingItem = this.cartItems.find(x => x.id === newItem.id);
      if (existingItem !== undefined){
        existingItem.quantity += 1;
        let index = this.cartItems.indexOf(existingItem);
        let oldCartItems = [...this.cartItems.slice(0, index), ...this.cartItems.slice(index+1, this.cartItems.length)];
        this.cartItems = oldCartItems.concat(existingItem)
      } else {
        this.cartItems = this.cartItems.concat(newItem)
      }

    }
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
