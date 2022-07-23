import Vue from 'vue';
import Vuex from 'vuex';

// Подключение модулей
import cart from "@/store/cart";
import products from "@/store/products";
import currency from "@/store/currency";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products,
    currency,
  },
});