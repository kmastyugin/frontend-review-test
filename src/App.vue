<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header>
    <List :currency="currency" />
    <Cart :cart="cart" />
  </div>
</template>

<script>
/**
 * Порядок моих комментариев и замечаний:
 * 1. App.vue 
 * 2. components/Header.vue
 * 3. components/List.vue
 * 4. components/Cart.vue
 * 5. store/index.js
 */

/**
 * 1. Пути до компонентов лучше указывать абсолютно, ведь, если текущий компонент изменит своё положение или импорт
 * компонентов будет скопирован куда-либо, то придется переписывать все пути относительно того компонента
 * Заменяем ./ на @/
 */
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
      /**
       * 2. Состояние корзины находится прямо в App.vue, необходимо декомпозировать работу состояний
       * Состояние корзины будет находиться в сторе
       * 
       * 3. Вероятно, заделом на будущее, станет возможность изменения валюты, если под это выделели отдельное состояние, следовательно,
       * велика вероятность, что обращение к currency будет осуществлять в большом количестве компонентов, удобства ради, вынесем в стор,
       * дабы, управлять валютой так же было удобно из него.
       * 
       * 4. Из-за переноса состояний из App.vue в стор, передача пропсов в компоненты Header, List и Cart является излишней
       */
      cart: [],
      currency: 'VGTB',
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
