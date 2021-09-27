<template>
  <tfoot>
    <tr>
      <td>合计:</td>
      <td colspan="5">{{ everyPrice }}</td>
    </tr>
  </tfoot>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    goodsList: {
      type: Array,
    },
  },
  setup(props) {
    console.log(props.goodsList);
    const everyPrice = computed(() => {
      let price = 0;
      props.goodsList.forEach((item) => {
        price += item.price * item.num;
      });
      return price;
    });
    return {
      everyPrice,
    };
  },
};
</script>

<style></style>