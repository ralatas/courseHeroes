export default {
    name: 'task-constructor',
    props: {
        type: String,
        question: String,
        variants: [Array, String],
        answers: [Array, String],
        tasksTypes: Array
    },
    data() {
        return {
            newVariant: ''
        }
    },
    methods: {
        onChange(key, value) {
            const {
                type, question, variants, answers
            } = this
            const updated = {
                type,
                question,
                variants,
                answers,
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
            const { id = 0 } = this.variants[this.variants.length - 1] || {}
            const variant = {
                id: id + 1,
                answer
            }
            this.newVariant = ''
            this.onChange('variants', [...this.variants, variant])
        }
    }
}
