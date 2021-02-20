import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: null,
    username: null,
    timerstart: null,
    timerstop: null,
    active: null,
    resultime: null
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
    },
    save_timerstop (state, timerstop) {
        state.timerstop = timerstop
    },
    save_active (state, active) {
        state.active = active
    },
    save_resultime (state, resultime) {
        state.resultime = resultime
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
    },
    save_timerstop ({ commit }, timerstop) {
        commit('save_timerstop', timerstop)
    },
    save_active ({ commit }, active) {
        commit('save_active', active)
    },
    save_resultime ({ commit }, resultime) {
        commit('save_resultime', resultime)
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
    },
    timerstop (state) {
        return state.timerstop
    },
    active (state) {
        return state.active
    },
    resultime (state) {
        return state.resultime
    }
  },
  modules: {
  }
})
