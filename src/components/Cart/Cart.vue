<template>
  <div class="cart-list">
    <ul>
      <li v-for="item in cartList" :key="item.title">
        {{ item.title }} | Количество: {{ item.price.toFixed(2) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cartList() {
      return this.$store.getters.cartList.reverse();
    },
  },
};
</script>

<style>
@import "./Cart.css";
</style>
