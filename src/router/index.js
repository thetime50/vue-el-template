import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home.vue'
import demo from './demo.js'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        demo,
        
        {
            path: '*',
            component: () => import('@/page/error404.vue')
        },
    ]
})
