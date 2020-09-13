import HTTP from '@/common/http-common';
import CreateUser from '@/components/modals/create-user/create-user.vue'

export default {
    name: 'Directions',
    created() {
        HTTP.get('students')
            .then(({ data }) => {
                this.students = data
            }).catch((err) => {
                console.log(err)
            })
    },
    data() {
        return {
            showCreate: false,
            students: []
        }
    },
    methods: {
        getRandomInt(min, max) {
            const Lmin = Math.ceil(min);
            const Lmax = Math.floor(max);
            return Math.floor(Math.random() * (Lmax - Lmin)) + Lmin;
        }
    },
    components: {
        CreateUser
    }
}
