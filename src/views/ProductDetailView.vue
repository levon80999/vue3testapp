<template>
  <div v-if="product">
    <h1>Product Detail</h1>

    <div class="img-wrap">
      <img :src="product.imageName" alt="image">
    </div>

    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price}}</h3>
      <button class="add-to-cart">Add to cart</button>
    </div>
  </div>
  <div v-else>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {request} from "@/remote";
import {useRoute} from "vue-router";

const product = ref({});
const route = useRoute();

onMounted(async () => {
  product.value = await request(`/products/${route.params.productId}`, 'GET')
})
</script>
