import Vue from 'vue'

export default {
    namespaced: true,
    mutations: {
        open(state, { name, data = {} }) {
            Vue.set(state, name, { data })
        },
        close(state, name) {
            Vue.delete(state, name)
        },
    },
    getters: {
        modals(state) {
            return state
        }
    }
}
