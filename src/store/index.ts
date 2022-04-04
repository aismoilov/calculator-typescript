import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    setProducts(state, products) {
      state.products = products;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
  actions: {
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    }
  },
  modules: {
  }
})


