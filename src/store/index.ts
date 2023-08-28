import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartItems: 0
    }
  },

  actions: {
    increment() {
      this.$patch({
        cartItems: this.cartItems + 1
      })
    },
  },
})
