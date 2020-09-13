import HTTP from '@/common/http-common';
import { mapState } from 'vuex';

export default {
    name: 'Detail',
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            dialog: true,
            state: 'initial',
        }
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
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
        select() {
            this.state = 'loading'
            HTTP.patch(`students/${this.user.id}/specialites`, { specialityId: this.data.id })
                .then(res => {
                    this.state = 'complete'
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
}
