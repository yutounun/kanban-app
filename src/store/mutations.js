import * as types from './mutation-types'

export default {
  // 定数を関数名として使用できる
  // いろいろな Flux 実装において、ミューテーション・タイプに定数を使用することが共通して見られるパターン
  // コードに対してリントツールのようなツールを利用できる
  // 共同で作業する人が、アプリケーション全体で何のミューテーションが可能であるかを一目見ただけで理解できる
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutations should be inplemented')
  },

  [types.FETCH_ALL_TASK_LIST] (state, payload) {
    throw new Error('FETCH_ALL_TASK_LIST mutations should be inplemented')
  },

  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutations should be inplemented')
  },

  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutations should be inplemented')
  },

  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutations should be inplemented')
  },

  [types.AUTH_LOGOUT] (state, payload) {
    throw new Error('AUTH_LOGOUT mutations should be inplemented')
  }
}