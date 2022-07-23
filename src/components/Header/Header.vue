<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ totalCartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    // Сумма корзины
    totalCartPrice() {
      return this.$store.getters.totalCartPrice;
    },

    // Название валюты
    currency() {
      return this.$store.getters.currency;
    },
  },
}
</script>

<style scoped>
@import "./Header.css";
</style>
