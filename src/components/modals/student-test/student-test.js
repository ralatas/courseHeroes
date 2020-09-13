import HTTP from '@/common/http-common';
import Task from './task/task.vue';

export default {
    name: 'student-test',
    components: {
        Task
    },
    props: {
        studentId: [String, Number],
        testId: [String, Number]
    },
    data() {
        return {
            dialog: true,
            state: 'initial',
            test: {},
            form: {
                testId: '',
                tasks: []
            },
            result: {}
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
    created() {
        this.form.testId = this.testId
        this.getTest()
    },
    methods: {
        getTest() {
            this.state = 'loading'
            HTTP.get(`/tests/${this.form.testId}`)
                .then((data = {}) => {
                    this.state = 'initial'
                    this.test = data
                }).catch((err) => {
                    console.log(err)
                })
        },
        submitForm() {
            this.state = 'loading'
            HTTP.patch(`/students/${this.studentId}/tests`, this.form)
                .then((data = {}) => {
                    this.state = 'complete'
                    this.result = data
                }).catch((err) => {
                    console.log(err)
                })
        },
        updateTask(id, task) {
            const index = this.form.tasks.findIndex(t => t.questionId === id)
            if (this.form.tasks[index]) {
                this.form.tasks = [
                    ...this.form.tasks.slice(0, index),
                    task,
                    ...this.form.tasks.slice(index + 1)
                ]
            } else {
                this.form.tasks = [...this.form.tasks, task]
            }
        }
    }
}
