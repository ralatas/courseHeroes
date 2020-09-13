export default {
    name: 'task',
    props: {
        result: Object,
        number: String,
        type: String,
        question: String,
        answers: [Array, String],
        rightAnswers: [Array, String, Number]
    },
    methods: {
        answer(value) {
            const updated = {
                questionId: this.number,
                answer: value
            }
            this.$emit('answer', updated)
        }
    }
}
