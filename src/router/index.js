import {createRouter, createWebHistory} from 'vue-router'
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import CreateProductView from "@/views/CreateProductView.vue";

const routes = [
  {
    path: '/cart',
    component: ShoppingCartView
  },
  {
    path: '/products',
    component: ProductsView
  },
  {
    path: '/product/:productId',
    component: ProductDetailView
  },
  {
    path: '/create/product',
    component: CreateProductView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
