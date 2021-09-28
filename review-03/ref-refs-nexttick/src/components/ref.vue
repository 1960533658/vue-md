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
    console.log(this.$refs.long)
    console.log(document.getElementById("spring"))
    let DemoObj = this.$refs.demo
    DemoObj.fn()
  },
  components: {
    Demo
  }
};
</script>

<style scoped></style>
