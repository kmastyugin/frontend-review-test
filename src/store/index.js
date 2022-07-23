import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/**
 * 19. Избавляемся свойств state, mutations, actions и декомпозируем логику по соответствующим модулям.
 *
 * 20. Модуль cart - управляющий корзиной
 * Модуль currency - управляющий выбранной валютой
 * Модуль products - управляющий списокм товаров
 *
 * 21. Импортируем модули стора, добалвяем в объект modules.
 */

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {},
});
