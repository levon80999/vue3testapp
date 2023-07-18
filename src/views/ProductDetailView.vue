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
    <NotFoundView />
  </div>
</template>

<script>
import NotFoundView from "./NotFoundView.vue";
import {request} from "@/remote";

export default {
  name: "ProductDetailView",

  components: {NotFoundView},

  data() {
    return {
      product: {}
    }
  },

  async mounted() {
    this.product = await request(`/products/${this.$route.params.productId}`, 'GET')
  }
}
</script>
