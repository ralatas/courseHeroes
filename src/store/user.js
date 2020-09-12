import HTTP from '@/common/http-common'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
    },
    actions: {
        login({ commit, dispatch }, auth) {
            return HTTP.post('http://handh-04dcbf6c.localhost.run/api/login', auth)
                .then(({ token }) => {
                    localStorage.setItem('token', token)
                    HTTP.defaults.headers.common.Authorization = `Bearer ${token}`
                    commit('setToken', token)
                    return true
                }).catch((err) => {
                    console.log(err)
                    dispatch('logout')
                    return false
                })
        },
        logout({ commit }) {
            localStorage.removeItem('token')
            commit('setToken', '')
            delete HTTP.defaults.headers.common.Authorization
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
    },
}
