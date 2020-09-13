export default {
    name: 'LeftMenu',
    data() {
        return {
            drawer: true,
            permanent: true,
            miniVariant: false,
            expandOnHover: false,
            items: [
                { title: 'Направления', route: '/room/directions', icon: 'mdi-arrow-collapse' },
                { title: 'Учителя', route: '/room/teachers', icon: 'mdi-account' },
                { title: 'Ученики', route: '/room/students', icon: 'mdi-account' },
                { title: 'Профиль', route: '/room/profile', icon: 'mdi-image' },
                { title: 'Рассписание', route: '/room/schedule', icon: 'mdi-help-box' },
                { title: 'Задания', route: '/room/tests', icon: 'mdi-help-box' }
            ],
        }
    },
}
