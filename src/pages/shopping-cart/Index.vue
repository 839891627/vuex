<template>
  <div class="shopping-cart">
    <h1>购物车</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
  import Cart from './Cart'
  import ProductList from './ProductList'

  export default {
    components: {Cart, ProductList}
  }
</script>
