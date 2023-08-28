<template>
  <h1>Shopping Cart</h1>

  <div v-if="cartItems.length > 0">
    <div class="product-container" v-for="product in cartItems" :key="product.id">
      <img class="product-image" :src="product.imageName" alt="image">

      <div class="details-wrap">
        <h3>{{ product.name}}</h3>
        <p>{{ product.price}}</p>
      </div>
      <button class="remove-button">Remove from Cart</button>
    </div>
  </div>
  <div v-else>
    You hav not items
  </div>
  <button class="checkout-button">Checkout</button>
</template>

<script setup>
import { cartItems } from "@/temp-data";
</script>
