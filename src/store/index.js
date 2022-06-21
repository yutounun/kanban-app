// main file to use all functions related to store by importing functions from other files
// import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const states = {
  auth: {
    token: null,
    useId: null
  },
  board: {
    list: []
  }
}

export default new Vuex.Store({
  // states: {}のように書かなくていい。それぞれのファイルでその形になっている
  states,
  getters,
  actions,
  mutations,
  // in production mode, mutation is not available
  strict: process.env.NODE_ENV !== 'production'
})
