<template>
  <div class="product-list">
    <div class="card" v-for="product in products" :style="{ width: cardsWidth + '%' }">
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
  /**
   * 10. Не совсем понятно для чего в компоненте используется состояние products, которому присваивается результат вызова экшена. 
   * Хорошим решением будет создать computed свойство, которое будет возвращать значение геттера списка товаров.
   * 
   * 11. В компоненте увидел логику с интервалом, возможно того требует задача, чтобы это делать именно тут... Но я бы вынес это в стор,
   * где так же можно будет управлять этим интервалом при помощи экшенов, например, остановить его, когда это потрубется или запустить. 
   * 
   * 12. cardsWidth - вызывает недопонимание, ведь window.innerWidth не является реактивным, поэтому cardsWidth выполнится один раз
   * и больше не будет меняться, даже если окно будет изменять свой размер. Тут надо вешать событие на изменение окна или вообще избавиться
   * от логики с количеством карточек на стороне JS и сделать обычные @media запросы в css, что я и сделал.
   * 
   * 13. addToCart() - я бы немного "причесал", добавил очистку поля ввода после добавления в корзину. Сделал бы предупреждение о невведённом
   * количестве добавляемого товара, вынес бы логику создания объекта для добавления в корзину в отдельный метод, устанонив перед ним __, дабы
   * указать приватность. 
   * 
   * 14. Стили в отдельный файл.
   */
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      }

      return 100 / count;
    },
  },
  methods: {
    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch('getProductsList');

      this.products = data;
    },
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
.product-list {
  padding: 10px;
}

.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.card-image {
  width: 100%;
}

button {
  padding: 5px;
  margin: 5px;
}
</style>
