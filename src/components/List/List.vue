<template>
  <div class="product-list">
    <div class="card" v-for="product in productsList" :key="product.title">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.initData();
  },

  computed: {
    // Список товаров
    productsList() {
      return this.$store.getters.productsList;
    },

    // Название валюты
    currency() {
      return this.$store.getters.currency;
    },
  },
  methods: {
    // Инициализация состояний (На случай, если их станет нужно больше)
    initData() {
      this.getProductsList();
    },

    // Запрос на получение списка товаров
    getProductsList() {
      this.$store.dispatch('setProductsList');
    },

    /**
     * Метод добавляет товар в корзину
     *
     * @param product - объект добавляемого товара
     *
     * @returns undefined
     */
    addToCart(product) {
      // Получение инпута добавляемого товара
      const countInput = this.$refs.amount.find((input) => input.id === product.id);
      // Веденное в поле количество добавляемого товара
      let amount = Number(countInput.value);

      // Если не ввели количество - выбросить предупреждение
      if (!amount) {
        return alert('Введите вес товара');
      }

      // Добавление товара в корзину
      this.$store.dispatch('addToCartList', this.__productCreator(product, amount));
      // Очистка инпута товара
      countInput.value = null;
    },

    /**
     * Создаёт объект товара для добавления в корзину
     *
     * @param product - объект товара из списка
     * @param amount - количество товара
     * @returns {{amount, price: number, title}} - объект для добавления в корзину
     */
    __productCreator(product, amount) {
      return {
        amount,
        price: Number((product.price * amount)), // Подсчет цены и преобразование в число
        title: product.title,
      };
    },
  },
};
</script>

<style>
@import "./List.css";
</style>
