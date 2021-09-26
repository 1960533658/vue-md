<template>
  <div>
    <HelloWorld></HelloWorld>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// todolist
import ToDoList from "./components/ToduList.vue"
export default {
  name: "App",
  components: {
    HelloWorld,
    ToDoList,
  },
};
</script>

<style>
</style>
