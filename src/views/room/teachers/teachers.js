import CreateUser from '@/components/modals/create-user/create-user.vue'

export default {
    name: 'Directions',
    data() {
        return {
            showCreate: false,
            teachers: [
                {
                    id: 1,
                    image: 'https://randomuser.me/api/portraits/men/81.jpg',
                    fullname: 'Иванов Иван',
                    email: 'mail@mail.ru',
                    birthday: '12.04.1991',
                    phone: '880055532',
                },
                {
                    id: 2,
                    image: 'https://randomuser.me/api/portraits/men/81.jpg',
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
