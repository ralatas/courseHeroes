export default {
    name: 'Profile',
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        localForm: {},
        preview: null,
    }),
    watch: {
        form: {
            immediate: true,
            handler(data) {
                this.localForm = { ...data }
            }
        }
    },
    methods: {
        submitForm() {
            this.$emit('save', this.localForm)
        },
        change(file) {
            this.preview = URL.createObjectURL(file);
        }
    }
}
