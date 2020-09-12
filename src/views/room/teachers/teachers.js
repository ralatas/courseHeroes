import CreateUser from '@/components/modals/create-user/create-user.vue'

export default {
    name: 'Directions',
    data() {
        return {
            showCreate: false,
            teachers: [
                {
                    fullname: 'Иванов Иван Иванович',
                    email: 'mail@mail.ru',
                    birthday: '12.04.1991',
                    phone: '880055532',
                },
                {
                    fullname: 'Сидоров Игнат',
                    email: 'mail@mail.ru',
                    birthday: '12.04.1991',
                    phone: '880055532',
                }
            ]
        }
    },
    components: {
        CreateUser
    }
}
