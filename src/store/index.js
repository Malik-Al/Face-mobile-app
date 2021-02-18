import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: null,
    username: null,
    timerstart: null
  },
  mutations: {
    save_id (state, id) {
      state.id = id
    },
    save_username (state, username) {
      state.username = username
    },
    save_timerstart (state, timerstart) {
      state.timerstart = timerstart
    }
  },
  actions: {
    save_id ({ commit }, id) {
      commit('save_id', id)
    },
    save_username ({ commit }, username) {
      commit('save_username', username)
    },
    save_timerstart ({ commit }, timerstart) {
      commit('save_timerstart', timerstart)
    }
  },
  getters: {
    id (state) {
      return state.id
    },
    username (state) {
      return state.username
    },
    timerstart (state) {
      return state.timerstart
    }
  },
  modules: {
  }
})
