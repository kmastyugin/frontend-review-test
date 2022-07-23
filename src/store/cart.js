export default {
  state: {
    cartList: [],
  },

  mutations: {
    // Изменить состояние корзины
    SET_CART_LIST: (state, payload) => {
      state.cartList = payload;
    },

    // Добавляет товар в корзину || Изменяет количество и цену текущего
    ADD_TO_CART_LIST: (state, payload) => {
      // Поиск в массиве такого же товара
      const found = state.cartList.find(candidate => candidate.title === payload.title);

      // Если не найдено - добавляет новый товар в корзину
      if(!found) {
        return state.cartList.push(payload);
      }

      // Добавляет к найденному товару
      found.price += payload.price;
      found.amount += payload.amount;
    },
  },

  actions: {
    // Вызов мутации корзины
    setCartList: ({ commit }, payload) => {
      commit('SET_CART_LIST', payload);
    },

    // Добавить в массив корзины товар
    addToCartList: ({ commit }, payload) => {
      commit('ADD_TO_CART_LIST', payload);
    },
  },

  getters: {
    // Содержимое корзины
    cartList: ( state ) => {
      return state.cartList;
    },

    // Суммарная цена корзины
    totalCartPrice( state ) {
      return state.cartList.reduce((accum, product) => accum += product.price, 0).toFixed(2);
    }
  },
};