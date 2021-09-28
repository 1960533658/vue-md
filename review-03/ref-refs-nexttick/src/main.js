import Vue from "vue";
import App from "./App.vue";
// 引入router实例
import VueRouter from "vue-router"
// 导入router规则
import router from "./routers";
Vue.config.productionTip = false;
// 挂载vue实例
Vue.use(VueRouter)
new Vue({
  // 使用vue规则
  router,
  render: (h) => h(App),
}).$mount("#app");
