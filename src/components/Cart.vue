<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
      {{ item }}
    </div>
  </div>
</template>

<script>
/**
 * 15. spisok_dlya_rendera - великолепное название))) 
 * 
 * 16. Не хватает важного атрибута key, который служит для оптимизации реактивной отрисовки состояния(массива)
 * 
 * 17. Избавляемся от пропса cart, получаем список корзины из стора.
 * 
 * 18. Меняем итерируемый div, На тег li, который оборачиваем в ul, дабы это стало семантически списком.
 */
export default {
  props: {
    cart: Array,
  },
  computed: {
    spisok_dlya_rendera() {
      return this.cart.reverse();
    },
  },
};
</script>

<style>
</style>
