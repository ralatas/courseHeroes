import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/room',
        name: 'room',
        component: () => import('../views/room/room.vue'),
        redirect: { name: 'room-profile' },
        children: [
            {
                path: 'profile',
                name: 'room-profile',
                component: () => import('../views/room/profile/profile.vue')
            },
            {
                path: 'schedule',
                name: 'room-schedule',
                component: () => import('../views/room/schedule/schedule.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
