import CreateDirection from '@/components/modals/create-direction/create-direction.vue'
import DetailDirection from '@/components/modals/detail-direction/detail-direction.vue'
import HTTP from '@/common/http-common';
import { mapState } from 'vuex';

export default {
    name: 'Directions',
    created() {
        this.getData()
    },
    data() {
        return {
            directions: [],
            showCreate: false,
            loading: true,
            previewData: null,
        }
    },
    components: {
        CreateDirection,
        DetailDirection
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
    },
    methods: {
        getData() {
            HTTP.get('specialities')
                .then(({ data }) => {
                    this.directions = data
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                })
        },
        openView(data) {
            this.previewData = data
        },
        close() {
            this.showCreate = false
            this.getData()
        },
        closeView() {
            this.previewData = false
            this.getData()
        },
        remove(id) {
            HTTP.delete('specialities', { id })
                .then(() => {
                    console.log('Удалилось')
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
}
