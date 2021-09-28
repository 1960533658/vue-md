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