<template>
  <h1>Products</h1>

  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product._id">
      <img src="https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg" alt="image">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/product/'+product._id">
        <button>View Details</button>
      </router-link>
      <button @click="addToCart()">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { request } from "@/remote";
import { useCartStore } from "@/store/index";

const products = ref([]);
const cartStore = useCartStore()
const { increment } = cartStore

const addToCart = () => {
  increment()
}

onMounted(async () => {
  products.value = await request('/products/', 'GET')
})
</script>
