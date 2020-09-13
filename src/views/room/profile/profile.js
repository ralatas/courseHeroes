import { mapState } from 'vuex'
import Profile from '@/components/forms/profile/profile.vue'

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
        Profile
    }
}
