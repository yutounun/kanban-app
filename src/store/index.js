// main file to use all functions related to store by importing functions from other files
// import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  // in production mode, mutation is not available
  strict: process.env.NODE_ENV !== 'production'
})
