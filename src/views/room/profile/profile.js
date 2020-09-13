import { mapState } from 'vuex'
import ProfileUser from '@/components/forms/profile-user/profile-user.vue'

export default {
    name: 'Profile',
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
    },
    methods: {
        exit() {
            this.$store.dispatch('user/logout')
                .then(success => {
                    if (success) {
                        this.$router.push({ name: 'index' })
                    }
                })
        },
        submitForm() {
            console.log('Обновляем пользователя')
        },
    },
    components: {
        ProfileUser
    }
}
