<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" alt="logo">
      </div>
    </router-link>

    <router-link to="/create/product" class="create-link">
      <button>Create Product</button>
    </router-link>
    <router-link to="/cart" class="cart-link">
      <button>Shopping Cart ({{ cartItems }})</button>
    </router-link>
  </div>
</template>

<script setup>
import logo from '@/assets/logo-hexagon.svg'

import {storeToRefs} from "pinia";
import {useCartStore} from "@/store";

const cartStore = useCartStore()
const {cartItems} = storeToRefs(cartStore)
</script>
