import CreateTest from '@/components/modals/create-test/create-test.vue'
import StudentTest from '@/components/modals/student-test/student-test.vue'
import HTTP from '@/common/http-common'

export default {
    name: 'tests',
    components: {
        CreateTest,
        StudentTest
    },
    data() {
        return {
            showCreate: false,
            showTest: false,
            form: {
                search: '',
                specialityId: null
            },
            specialities: [],
            tests: []
        }
    },
    watch: {
        form: {
            deep: true,
            handler() {
                this.getTests()
            }
        }
    },
    created() {
        this.getSpecialities()
        this.getTests()
    },
    methods: {
        getSpecialities() {
            HTTP.get('/specialities')
                .then(({ data = [] } = {}) => {
                    this.specialities = data
                }).catch((err) => {
                    console.log(err)
                })
        },
        getTests() {
            const { search, specialityId } = this.form
            const request = {}
            if (search && search.length) {
                request.search = search
            }

            if (specialityId) {
                request.specialityId = specialityId
            }

            HTTP.get('/tests', { params: request })
                .then(({ data = [] } = {}) => {
                    this.tests = data
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
}
