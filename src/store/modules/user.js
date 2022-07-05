import { set, get, remove } from '../../untils/localStorage'
export default {
  namespaced: true,
  state: {
    token: get('token') || '',
    tagsview: get('tagsview') || []
  },
  mutations: {
    handlesetToken(state, token) {
      state.token = JSON.stringify(token)
      set('token', token)
    },
    handleremoveToken(state) {
      state.token = ''
      remove('token')
    },
    handeleremoveTagsview(state) {
      state.tagsview = []
      remove('tagsview')
    },
    setTagsview(state, tags) {
      const res = state.tagsview.find((item) => {
        return item.path === tags.path
      })
      if (!res) {
        state.tagsview.push(tags)
        set('tagsview', state.tagsview)
      }
    },
    removetagsview(state, index) {
      state.tagsview.splice(index, 1)
      set('tagsview', state.tagsview)
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('handlesetToken', token)
    },
    removeToken({ commit }) {
      commit('handleremoveToken')
      commit('handeleremoveTagsview')
    }
  }
}
