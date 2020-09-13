import CreateUser from '@/components/modals/create-user/create-user.vue'

export default {
    name: 'Directions',
    data() {
        return {
            showCreate: false,
            teachers: [
                {
                    id: 1,
                    image: 'https://randomuser.me/api/portraits/men/12.jpg',
                    fullname: 'Иванов Семен',
                    email: 'mail@mail.ru',
                    birthday: '12.04.1991',
                    phone: '880055532',
                },
                {
                    id: 2,
                    image: 'https://randomuser.me/api/portraits/men/7.jpg',
                    fullname: 'Сидоров Саша',
                    email: 'mail@mail.ru',
                    birthday: '12.04.1991',
                    phone: '880055532',
                },
                {
                    id: 3,
                    image: 'https://randomuser.me/api/portraits/men/74.jpg',
                    fullname: 'Музин Максим',
                    email: 'mail2@mail.ru',
                    birthday: '12.04.1992',
                    phone: '880055576',
                },
                {
                    id: 4,
                    image: 'https://randomuser.me/api/portraits/men/77.jpg',
                    fullname: 'Кузин Виктор',
                    email: 'mail2@mail.ru',
                    birthday: '12.04.1992',
                    phone: '880055576',
                }
            ]
        }
    },
    components: {
        CreateUser
    }
}
