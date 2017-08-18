import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '@/pages/shopping-cart/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shopping-cart',
      component: ShoppingCart
    }
  ]
})
