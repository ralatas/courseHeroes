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
                const temp = { ...data }
                this.preview = 'https://randomuser.me/api/portraits/men/45.jpg'
                delete temp.image
                this.localForm = temp
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
