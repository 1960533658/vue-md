import { createRouter, createWebHashHistory } from "vue-router";
import Tab from "../components/Tab.vue";
import Student from "../components/Student.vue";

const routes = [
  { path: "/", component: Tab },
  { path: "/student", component: Student }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;
