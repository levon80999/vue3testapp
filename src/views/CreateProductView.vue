<template>
  <h1>Create Product Page</h1>
  <br>
  <br>
  <div class="form-group">
    <label for="name">Name:</label>
    <input v-model="name" id="name" class="form-control" placeholder="Product name">
  </div>

  <div class="form-group">
    <label for="description">Description:</label>
    <textarea v-model="description" id="description" rows="5" cols="60" class="form-control" placeholder="Product description..."></textarea>
  </div>

  <div class="form-group">
    <label for="price">Price:</label>
    <input v-model="price" type="number" class="form-control" placeholder="Product price">
  </div>

  <div class="form-group">
    <label for="image">Upload image: </label>
    <input
        class="form-control-file"
        type="file"
        id="image"
        accept="image/*"
        v-bind="image"
    />
  </div>

  <button class="btn btn-primary" @click.prevent="createProduct()">Create</button>
</template>

<script>
import { request } from '@/remote/index'

export default {
  name: 'CreateProductView',
  data() {
    return {
      name: '',
      description: '',
      price: '',
      image: '',
    }
  },

  methods: {
    createProduct() {
      request('/products/', 'post', {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
      })
    }
  }
}
</script>
