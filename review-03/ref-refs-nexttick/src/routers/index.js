// 引入router
import VueRouter from "vue-router"
import Ref from "../components/ref.vue";
import Axios from "../components/Axios.vue"
const routes = [
  { path: "/ref", component: Ref },
  {path: "/axios", component: Axios}
]
// 创建router实例
const router = new VueRouter({
  routes
})
export default router;