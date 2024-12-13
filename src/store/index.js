import { createStore } from 'vuex'

export default createStore({
  state: {
    //estado para el tema
    theme: 'dark',
  },
  getters: {
    theme: state => state.theme,
    isDark: state => state.theme === 'dark' ? true : false,
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
