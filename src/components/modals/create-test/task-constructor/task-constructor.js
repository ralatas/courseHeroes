export default {
    name: 'task-constructor',
    props: {
        type: String,
        question: String,
        answers: [Array, String],
        rightAnswers: [Array, String, Number],
        tasksTypes: Array
    },
    data() {
        return {
            newAnswer: ''
        }
    },
    methods: {
        onChange(key, value) {
            const {
                type, question, answers, rightAnswers
            } = this
            const updated = {
                type,
                question,
                answers,
                rightAnswers,
                [key]: value
            }
            this.$emit('change', updated)
        },
        onRemove() {
            this.$emit('remove')
        },
        getTaskLabel(type) {
            return this.tasksTypes.find(({ key }) => key === type).label
        },
        addVariant(answer) {
            const { id = 0 } = this.answers[this.answers.length - 1] || {}
            const newAnswer = {
                id: id + 1,
                answer
            }
            this.newAnswer = ''
            this.onChange('answers', [...this.answers, newAnswer])
        }
    }
}
