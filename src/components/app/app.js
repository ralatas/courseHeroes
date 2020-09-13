import Authorization from '@/components/modals/authorization/authorization.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'App',
    data: () => ({
        showAuth: false
    }),
    computed: {
        ...mapGetters({
            authorized: 'user/isLoggedIn'
        })
    },
    components: {
        Authorization
    },
}
