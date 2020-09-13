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
            {
                path: 'directions',
                name: 'room-directions',
                component: () => import('../views/room/directions/directions.vue')
            },
            {
                path: 'teachers',
                name: 'room-teachers',
                component: () => import('../views/room/teachers/teachers.vue')
            },
            {
                path: 'tests',
                name: 'room-tests',
                component: () => import('../views/room/tests/tests.vue')
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
