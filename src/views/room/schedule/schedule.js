import HTTP from '@/common/http-common';

export default {
    name: 'Schedule',
    created() {
        this.getData()
        const arr = {}
        for (let i = 1; i < 31; i += 1) {
            arr[i] = { id: i }
        }
        this.days = arr
    },
    data() {
        return {
            days: {},
            activities: []
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
        openShedule() {
            console.log('Открыть рассписание')
        }
    }
}
