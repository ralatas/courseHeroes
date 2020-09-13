import Logo from '@/assets/svg/logo.svg'
import LeftMenu from '@/components/left-menu/left-menu.vue'

export default {
    name: 'Room',
    created() {
        this.$store.dispatch('user/getUser')
    },
    components: {
        Logo,
        LeftMenu
    }
}
