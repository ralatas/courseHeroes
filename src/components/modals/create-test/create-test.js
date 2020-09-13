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
    data() {
        return {
            dialog: true,
            specialities: ['Foo', 'Bar', 'Fizz', 'Buzz'].map((e, id) => ({ id, name: e })),
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

            HTTP.post('http://handh-04dcbf6c.localhost.run/api/tasks', this.form)
                .then(res => {
                    this.state = 'complete'
                    console.log(res)
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
                    newTask.variants = []
                    newTask.answers = ''
                    break
                case 'checkbox':
                    newTask.variants = []
                    newTask.answers = []
                    break
                case 'input':
                    newTask.answers = ''
                    break
                default:
            }

            this.form.tasks = [...this.form.tasks, newTask]
        },
        updateTask(index, task) {
            if (this.form.tasks[index]) {
                this.form.tasks = [
                    ...this.form.tasks.slice(0, index),
                    task,
                    ...this.form.tasks.slice(index + 1)
                ]
            } else {
                this.form.tasks = [...this.form.tasks, task]
            }
        },
        removeTask(index) {
            this.form.tasks = this.form.tasks.filter((task, i) => i !== index)
        }
    }
}
