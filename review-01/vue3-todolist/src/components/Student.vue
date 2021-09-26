<template>
  <div>
    <h2>学生管理系统</h2>
    <div>
      <span>姓名:</span>
      <input type="text" v-model="nameValue" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="ageValue" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sexValue">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="handleAddOrChange">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in studentList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="handleDel(item.id)">删除</button>
            <button @click="handleExit(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const studentList = reactive([
      { id: 1, name: "看看", age: 19, sex: "男" },
      { id: 2, name: "康康", age: 19, sex: "男" },
    ]);
    
    //#region  清空输入框
    function clearInput() {
      nameValue.value = "";
      ageValue.value = "";
      sexValue.value = "";
    }
    //#endregion
    
    //#region  增加内容
    const nameValue = ref("");
    const ageValue = ref("");
    const sexValue = ref("");
    function handleAddOrChange() {
      if (!isExit.value) {
        const newStudent = {
          id: studentList.length + 1,
          name: nameValue.value,
          age: ageValue.value,
          sex: sexValue.value,
        };
        studentList.push(newStudent);
        clearInput()
      }else {
        studentList[exitIndex.value].name = nameValue.value
        studentList[exitIndex.value].age = ageValue.value
        studentList[exitIndex.value].sex  = sexValue.value
        exitIndex.value = null
        clearInput()
      }
    }
    //#endregion

    //#region  删除
    const handleDel = (id) => {
      const index = studentList.findIndex((item) => item.id === id);
      studentList.splice(index, 1);
    };
    //#endregion

    //#region  修改
    const isExit = ref(false);
    const exitIndex = ref(null)
    const handleExit = (id) => {
      const index = studentList.findIndex((item) => item.id === id);
      exitIndex.value = index
      nameValue.value = studentList[index].name;
      ageValue.value = studentList[index].age;
      sexValue.value = studentList[index].sex;
      isExit.value = !isExit.value;
    };
    //#endregion

    return {
      studentList,
      nameValue,
      ageValue,
      sexValue,
      handleAddOrChange,
      // 删除
      handleDel,
      // 修改
      handleExit,
      // 清空输入框
      clearInput
    };
  },
};
</script>

<style></style>