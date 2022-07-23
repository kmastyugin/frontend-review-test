import api from "@/../api/products";

let intervalFetch = null;

/**
 * Функция отправляет запрос на получение данных и очищает интервал, если возникли ошибки
 * Можно вынести в api, но решил, что здесь это уместно, так как управление работой интервала можно делать именно здесь.
 *
 * @returns {Promise}
 */
const getProductsData = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const productsData = await api.getProductsList();
      resolve(productsData);
    } catch (error) {
      clearInterval(intervalFetch);
      reject(error);
    }
  });
};

export default {
  state: () => ({
    // Список товаров
    productsList: [],
  }),

  mutations: {
    /**
     * Изменяет состояние productsList (списка товаров)
     * @param state - объект состояния
     * @param payload - данные для изменения состояния
     */
    SET_PRODUCTS_LIST: (state, payload) => {
      state.productsList = payload ?? [];
    },
  },

  actions: {
    /**
     * Метод получает список товаров
     *
     * @param commit - объект вызова мутаций
     * @param payload - данные для изменения состояния
     * @returns {Promise<void>}
     */
    setProductsList: async ({ commit }, payload = null) => {
      // Если payload имеется - присвоить его в состояние productsList
      if (payload) {
        return commit("SET_PRODUCTS_LIST", payload);
      }

      try {
        // Запрос на получение товаров
        const response = await getProductsData();
        commit("SET_PRODUCTS_LIST", response);

        // Установить интервал
        intervalFetch = setInterval(() => getProductsData(), 2000);
      } catch (e) {
        throw new Error(e);
      }
    },
  },

  getters: {
    /**
     * Список товаров
     * @param state - объект состояния
     * @returns { [] } - Массив с товарами/пустой
     */
    productsList: (state) => {
      return state.productsList;
    },
  },
};
