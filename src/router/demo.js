export default {
    path: '/demo',
    name: 'demo',
    redirect: 'demo/demo1',
    component: () => import('@/page/routerviewcomp.vue'),
    children:[
        {
            path: 'demo1',
            name: 'demo1',
            component: () => import('@/page/demo/demo1/demo1.vue')
        },
        {
            path: 'demo2',
            name: 'demo2',
            component: () => import('@/page/demo/demo2/demo2.vue')
        },
    ],
}
