# 复习第三天

## axios

### 下载
```shell
npm install axios
```
### 挂载axios
`Axiox.vue`
```vue
<template>
  <div>
    <h1>获取所有图书信息</h1>
    <button @click="handleGetAll">获取所有图书</button>
  </div>
</template>

<script>
import axios from "axios"
// 配置基本地址
axios.defaults.baseURL= "http://123.57.109.30:3006"
export default {
  methods: {
    handleGetAll() {
      axios({
        url:"/api/getbooks",
        methods: "GET"
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>

```
## Ref
### 目标
1 创建组件/引入组件/注册组件/使用组件
2 组件起别名ref
3 恰当时机, 获取组件对象
### 使用
`ref.vue`
```vue
<template>
  <div class="hello">
    <p>获取原生DOM</p>
    <h1 id="spring" ref="long">Spring_Long</h1>
    <Demo ref="demo"></Demo>
  </div>
</template>

<script>
/* 
  !目标 获取组件对象 
  * 1 创建组件/引入组件/注册组件/使用组件
  * 2 组件起别名ref
  * 3 恰当时机, 获取组件对象
*/
import Demo from "./Demo.vue"
export default {
  mounted() {
    // 获取DOM元素
    console.log(this.$refs.long)
    console.log(document.getElementById("spring"))
    // 获取组件实例
    let DemoObj = this.$refs.demo
    DemoObj.fn()
  },
  components: {
    Demo
  }
};
</script>

<style scoped></style>

```

## 路由

### 下载
```shell
npm install vue-router@next
```

### 创建路由规则
```js
import VouRouter from "vue-router";
import Ref from "../components/ref.vue";
import Axios from "../components/Axios.vue";
const routes = [
  { path: "/ref", component: Ref },
  { path: "/axios", component: Axios }
]
// 创建router实例
const router = new VueRouter({
  routes
})
export default router
```
### 挂载路由
```js
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

```