import Editor from '@/components/editor/editor.vue';
import HTTP from '@/common/http-common';
import Task from './task-constructor/task-constructor.vue';

const tasksTypes = [{
    key: 'radio',
    label: 'Выбрать один из текстовых вариантов'
}, {
    key: 'checkbox',
    label: 'Выбрать несколько из текстовых вариантов'
}, {
    key: 'input',
    label: 'Письменный ответ'
}]

export default {
    name: 'create-test',
    components: {
        Task,
        Editor
    },
    props: {
        specialities: Array
    },
    data() {
        return {
            dialog: true,
            tasksTypes,
            preview: null,
            state: 'initial',
            newTaskType: null,
            form: {
                title: '',
                specialityId: '',
                maxScore: 10,
                description: '',
                tasks: []
            }
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
            this.state = 'loading'

            HTTP.post('/tests', this.form)
                .then(() => {
                    this.state = 'complete'
                    this.$emit('create', this.form)
                }).catch((err) => {
                    console.log(err)
                })
        },
        createTask(taskType) {
            const newTask = {
                type: taskType,
                question: ''
            }

            switch (taskType) {
                case 'radio':
                    newTask.answers = []
                    newTask.rightAnswers = ''
                    break
                case 'checkbox':
                    newTask.answers = []
                    newTask.rightAnswers = []
                    break
                case 'input':
                    newTask.answers = ''
                    break
                default:
            }

            this.form.tasks = [...this.form.tasks, newTask]
        },
        updateTask(index, task) {
            const newTask = { ...task, number: index }
            if (this.form.tasks[index]) {
                this.form.tasks = [
                    ...this.form.tasks.slice(0, index),
                    newTask,

                    ...this.form.tasks.slice(index + 1)
                ]
            } else {
                this.form.tasks = [...this.form.tasks, newTask]
            }
        },
        removeTask(index) {
            this.form.tasks = this.form.tasks.filter((task, i) => i !== index)
        }
    }
}
