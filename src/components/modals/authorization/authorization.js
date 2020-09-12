export default {
    name: 'Autorization',
    data() {
        return {
            dialog: true,
            email: '',
            password: '',
        }
    },
    watch: {
        dialog(newVal) {
            if (!newVal) {
                setTimeout(() => {
                    this.$emit('close')
                }, 500)
            }
        }
    },
    methods: {
        submitForm() {
            this.$store.dispatch('user/login', { email: this.email, password: this.password }).then((success) => {
                if (success) {
                    this.$store.dispatch('getAllCountries')
                    this.$router.push({ name: 'room' })
                } else {
                    alert('Invalid login or password')
                }
                return true
            })
        },
        exit() {
            this.$store.dispatch('user/logout')
        }
    }
}
