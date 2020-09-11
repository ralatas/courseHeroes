export default {
    name: 'LeftMenu',
    data() {
        return {
            items: [
                { title: 'Профиль', route: '/room/profile', icon: 'mdi-image' },
                { title: 'Рассписание', route: '/room/schedule', icon: 'mdi-help-box' }
            ],
        }
    },
}
