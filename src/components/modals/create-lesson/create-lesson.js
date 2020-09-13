import HTTP from '@/common/http-common';

export default {
    name: 'CreateDirection',
    data() {
        return {
            dialog: true,
            preview: null,
            state: 'initial',
            form: {
                taskId: '',
                date: '',
                from: '',
                to: null,
                title: '',
                groupSize: ''
            },
            tasks: [],
            days: {}
        }
    },
    created() {
        this.getTests()
        const arr = {}
        for (let i = 1; i < 31; i += 1) {
            arr[i] = { id: i }
        }
        this.days = arr
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
            this.state = 'loading'

            HTTP.post('schedules', this.form, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    this.state = 'complete'
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        },
        getTests() {
            HTTP.get('/tests', { params: { specialityId: 7 } })
                .then(({ data = [] } = {}) => {
                    this.tasks = data
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
}
