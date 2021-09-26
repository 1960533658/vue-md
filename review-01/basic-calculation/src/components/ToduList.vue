<template>
  <div class="todolist">
    <ul>
      <li v-for="item in todolist" :key="item.id">
        <span>{{ item.todo }}</span>
        <input
          type="checkbox"
          :checked="item.done"
          @click="handleChange(item.id)"
        />
        <a href="#" @click="handleDel(item.id,$event)">删除</a>
      </li>
    </ul>
    <input type="text" placeholder="请输入要添加的事情" v-model="addMatter" />
    <button @click="handleAdd">增加数据</button>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      addMatter: "",
      todolist: [
        { id: 1, todo: "打飞机", done: false },
        { id: 2, todo: "睡觉", done: false },
        { id: 3, todo: "打豆豆", done: false },
      ],
    };
  },
  methods: {
    // 修改状态
    handleChange(id) {
      const index = this.todolist.findIndex((item) => item.id === id);
      this.todolist[index].done = !this.todolist[index].done;
    },
    // 增加数据
    handleAdd() {
      this.todolist.push(
        {id: Date.now(), todo: this.addMatter,done: false}
      )
    },
    // 删除数据
    handleDel(id,e) {
      e.preventDefault();
      const index = this.todolist.findIndex(item => item.id === id)
      this.todolist.splice(index,1)
    }
  },
};
</script>

<style></style>