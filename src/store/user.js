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
        getUser({ commit }) {
            HTTP.get('http://handh-ac972a82.localhost.run/user')
                .then((user) => {
                    commit('setUser', user)
                }).catch((err) => {
                    console.log(err)
                })
        },
        removeUser({ commit }, id) {
            HTTP.delete(`http://handh-ac972a82.localhost.run/profile/${id}`)
                .then(() => {
                    commit('setUser', null)
                }).catch((err) => {
                    console.log(err)
                })
        },
        login({ commit, dispatch }, auth) {
            return HTTP.post('http://handh-ac972a82.localhost.run/login', auth)
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
            return HTTP.post('http://handh-ac972a82.localhost.run/logout')
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
