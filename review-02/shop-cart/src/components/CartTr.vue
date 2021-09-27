<template>
  <tbody>
    <tr v-for="(item, index) in goodsList" :key="index">
      <td>
        <input
          type="checkbox"
          :checked="item.checked"
          @click="handleChecked(index)"
        />
      </td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <button @click="handleChange(index, 'add')">+</button>{{ item.num
        }}<button @click="handleChange(index, 'sub')">-</button>
      </td>
      <td>{{ item.num * item.price }}</td>
      <td><button @click="handleDel(index)">删除</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    goodsList: {
      type: Array,
    },
  },
  // 注意使用content触发emit（触发父组件的方法）
  setup(props, context) {
    console.log(props);

    //#region  删除
    const handleDel = (index) => {
      context.emit("handleDel", index);
    };
    //#endregion

    //#region  更改数量
    const handleChange = (index, type) => {
      console.log(index, type);
      context.emit("handleChange", index, type);
    };
    //#endregion

    //#region  修改复选框状态
    const handleChecked = (index) => {
      context.emit("handleChecked", index);
    };
    //#endregion

    return {
      handleDel,
      handleChange,
      handleChecked,
    };
  },
};
</script>

<style></style>
