import HTTP from '@/common/http-common';
import CreateLesson from '@/components/modals/create-lesson/create-lesson.vue'

export default {
    name: 'Schedule',
    created() {
        this.getData()
        this.getDataDir()
        const arr = {}
        for (let i = 1; i < 31; i += 1) {
            arr[i] = { id: i }
        }
        this.days = arr
    },
    data() {
        return {
            days: {},
            activities: [],
            loading: true,
            showCreate: false
        }
    },
    methods: {
        getData() {
            HTTP.get('schedules', { params: { specialityId: 7 } })
                .then(({ data }) => {
                    data.forEach(item => {
                        this.days[item.date] = item
                    })
                }).catch((err) => {
                    console.log(err)
                })
        },
        getDataDir() {
            HTTP.get('specialities')
                .then(({ data }) => {
                    this.directions = data
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                })
        },
        openShedule() {
            this.showCreate = true
        },
        closeCreate() {
            this.showCreate = false
        }
    },
    components: {
        CreateLesson
    }
}
