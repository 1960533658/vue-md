import { createRouter, createWebHashHistory } from "vue-router"
import Cart from "../components/Cart.vue";
import Mathematics from "../components/Mathematics.vue"
const routes = [
  { path: "/shopcart", component: Cart },
  { path: "/mathematics", component: Mathematics }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;