<template>
  <div class="hello">
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" @click="handleAll" :checked="btnAll"/> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <CartList
        :goodsList="goodsList"
        @handleDel="handleDel"
        @handleChange="handleChange"
        @handleChecked="handleChecked"
      ></CartList>
        <!-- @handleCheckedAll="handleCheckedAll" -->
      <cartTfoot :goodsList="goodsList"></cartTfoot>
    </table>
  </div>
</template>

<script>
import CartList from "./CartTr.vue";
import CartTfoot from "./cartTfoot.vue"
import {  reactive, ref, watch } from "vue";
export default {
  name: "HelloWorld",
  components: {
    CartList,
    CartTfoot
  },
  setup() {
    const goodsList = reactive([
      {
        name: "诸葛亮",
        price: 1000,
        num: 1,
        checked: false,
      },
      {
        name: "蔡文姬",
        price: 1500,
        num: 1,
        checked: false,
      },
      {
        name: "妲己",
        price: 2000,
        num: 1,
        checked: false,
      },
      {
        name: "鲁班",
        price: 2200,
        num: 1,
        checked: false,
      },
    ]);

    //#region  删除数据
    const handleDel = (index) => {
      goodsList.splice(index, 1);
    };
    //#endregion

    //#region  更改数量
    function handleChange(index,type) {
      console.log(index,type);
      switch(type) {
        case "add":
          goodsList[index].num++
          break;
        case "sub":
          goodsList[index].num--
          break;
      }
    }
    //#endregion
    
    //#region  更改复选框状态
    const handleChecked = (index) =>{
      console.log(index)
      goodsList[index].checked = !goodsList[index].checked
    }
    //#endregion
    
    //#region  判断是否选中全部
    watch(goodsList, () => {
      const arr = goodsList.filter(item => item.checked === true)
      if (arr.length===goodsList.length) {
        btnAll.value=true
      }else {
        btnAll.value=false
      }
    })
    //#endregion
    
    //#region  全选按钮
    const btnAll = ref(false)
    const handleAll = () => {
      btnAll.value = !btnAll.value
      goodsList.forEach(item => {
        console.log(btnAll.value)
        item.checked = btnAll.value
      })
    }
    //#endregion
    
    

    return {
      goodsList,
      // 删除
      handleDel,
      // 更改数量
      handleChange,
      // 更改复选框状态
      handleChecked,
      // 全选
      handleAll,
      btnAll
    };
  },
};
</script>

<style scoped>
</style>
