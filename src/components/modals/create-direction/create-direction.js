import Editor from '@/components/editor/editor.vue';
import HTTP from '@/common/http-common';

export default {
    name: 'CreateDirection',
    data() {
        return {
            dialog: true,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            preview: null,
            state: 'initial',
            form: {
                name: '',
                teacherId: '',
                topic: '',
                image: null,
                description: ''
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
            const data = new FormData();
            Object.keys(this.form).forEach(key => {
                data.append(key, this.form[key])
            })

            HTTP.post('specialities', data, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    this.state = 'complete'
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        },
        change(file) {
            this.preview = URL.createObjectURL(file);
        }
    },
    components: {
        Editor
    }
}
