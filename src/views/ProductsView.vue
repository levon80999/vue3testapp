<template>
  <h1>Products</h1>

  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product._id">
      <img :src="product.imageName" alt="image">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/product/'+product._id">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { request } from '@/remote/index'

export default {
  name: "ProductsView",

  data() {
    return {
      products: []
    }
  },

  async mounted() {
    this.products = await request('/products/', 'GET')
  }
}
</script>
