import HTTP from '@/common/http-common';
import Profile from '@/components/forms/profile/profile.vue';

export default {
    name: 'CreateUser',
    props: {
        userType: {
            type: String,
            default: 'student'
        }
    },
    data() {
        return {
            types: {
                student: 'студента',
                teacher: 'преподавателя'
            },
            dialog: true,
            state: 'initial',
            form: {
                email: '',
                name: '',
                password: '',
                image: null,
                description: '',
                birthday: '26.06.1999'
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
        },

    },
    methods: {
        submitForm(form) {
            this.state = 'loading'
            const data = new FormData();
            Object.keys(form).forEach(key => {
                if (this.userType === 'teacher' || (this.userType === 'student' && key !== 'description')) {
                    data.append(key, form[key])
                }
            })

            HTTP.post(`register/${this.userType}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    this.state = 'complete'
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
    components: {
        Profile
    }
}
