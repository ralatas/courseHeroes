import { VueEditor } from 'vue2-editor';

export default {
    name: 'editor',
    components: {
        VueEditor
    },
    props: {
        value: String,
        title: {
            type: String,
            default: 'Additional information'
        },
        height: {
            type: String,
            default: '210px'
        }
    },
    computed: {
        htmlData: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    }
};
