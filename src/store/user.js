import HTTP from '@/common/http-common'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        getUser({ commit }, id) {
            HTTP.post(`profile/${id}`)
                .then(({ user }) => {
                    commit('setUser', user)
                }).catch((err) => {
                    console.log(err)
                })
        },
        removeUser({ commit }, id) {
            HTTP.delete(`profile/${id}`)
                .then(() => {
                    commit('setUser', null)
                }).catch((err) => {
                    console.log(err)
                })
        },
        login({ commit, dispatch }, auth) {
            return HTTP.post('login', auth)
                .then(({ token, user }) => {
                    localStorage.setItem('token', token)
                    HTTP.defaults.headers.common.Authorization = `Bearer ${token}`
                    commit('setToken', token)
                    commit('setUser', user)
                    return true
                }).catch((err) => {
                    console.log(err)
                    dispatch('logout')
                    return false
                })
        },
        logout({ commit }) {
            return HTTP.post('logout')
                .then(() => {
                    localStorage.removeItem('token')
                    delete HTTP.defaults.headers.common.Authorization
                    commit('setToken', '')
                    return true
                }).catch((err) => {
                    console.log(err)
                    return false
                })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
    },
}
