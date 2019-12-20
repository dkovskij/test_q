import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import { SET_ERROR } from '@/store/actions'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules: any, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters,
  state: {
    // token RandomAPI
    token: 'DN7K-IQOR-D0WJ-OZY2',
    isError: false
  },
  mutations: {
    setError: (state, error) => {
      state.isError = error
    }
  },
  actions: {
    [SET_ERROR]({ commit }, error) {
      commit('setError', error)
    }
  }
})
