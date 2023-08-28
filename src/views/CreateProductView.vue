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

<script setup lang="ts">
import { ref } from 'vue'
import {request} from "@/remote";

const name = ref('');
const description = ref('');
const price = ref('');
const image = ref('');

const createProduct = () =>  {
  try {
    request('/products/', 'post', {
      name: name.value,
      description: description.value,
      price: price.value,
      image: image.value,
    })

    window.location.href = '/products'
  } catch (err) {
    console.error(err)
  }
}
</script>
