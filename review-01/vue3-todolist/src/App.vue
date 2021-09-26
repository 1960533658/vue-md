<template>
  <div>
    <router-link to="/">Tab</router-link><br />
    <router-link to="/student">student</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/Tab.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
}
</style>
