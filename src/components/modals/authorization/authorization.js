export default {
    name: 'Autorization',
    data() {
        return {
            dialog: true,
            login: '',
            password: '',
        }
    },
    watch: {
        dialog(newVal) {
            if (!newVal) {
                setTimeout(() => {
                    this.$emit('close')
                }, 1000)
            }
        }
    },
    methods: {
        submitForm() {
            this.$store.dispatch('user/login', this.form).then((success) => {
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
