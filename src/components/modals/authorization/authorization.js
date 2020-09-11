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
}
