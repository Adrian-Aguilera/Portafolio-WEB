import { createStore } from 'vuex'

export default createStore({
  state: {
    //estado para el tema
    theme: 'dark',
    base: process.env.VUE_APP_BASE_URL,
  },
  getters: {
    theme: state => state.theme,
    isDark: state => state.theme === 'dark' ? true : false,
    base: state => state.base,
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    },
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('setTheme', theme)
    },
  },
  modules: {
  }
})
