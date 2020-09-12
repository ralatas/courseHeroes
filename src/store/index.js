import Vue from 'vue'
import Vuex from 'vuex'
import modals from '@/store/modals'
import user from '@/store/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        modals,
        user,
    }
})
