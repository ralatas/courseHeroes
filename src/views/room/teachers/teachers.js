import HTTP from '@/common/http-common';
import CreateUser from '@/components/modals/create-user/create-user.vue'

export default {
    name: 'Directions',
    created() {
        HTTP.get('http://handh-ac972a82.localhost.run/teachers')
            .then(({ data }) => {
                this.teachers = data
            }).catch((err) => {
                console.log(err)
            })
    },
    data() {
        return {
            showCreate: false,
            teachers: []
        }
    },
    components: {
        CreateUser
    },
    methods: {
        getRandomInt(min, max) {
            const Lmin = Math.ceil(min);
            const Lmax = Math.floor(max);
            return Math.floor(Math.random() * (Lmax - Lmin)) + Lmin;
        }
    }
}
