export default {
  state: {
    currency: "VGTB",
  },

  mutations: {
    // Установить текущую валюту
    SET_CURRENCY: (state, payload) => {
      state.currency = payload;
    },
  },

  actions: {
    // Вызвать мутацию валюты
    setCurrency: ({ commit }, payload) => {
      commit("SET_CURRENCY", payload);
    },
  },

  getters: {
    // Получить текущую валюту
    currency: (state) => {
      return state.currency;
    },
  },
};
