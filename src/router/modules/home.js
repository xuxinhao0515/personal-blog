import Layout from '@/layout/index.vue'

export default [
    {
        path: '/home',
        name: 'home',
        component: Layout,
        redirect: '/home/index',
        meta: {
          title: '首页',
          icon: 'House'
        },
        children: [
            {
                path: '/home/index',
                name: 'index',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                  title: '我的'
                }
            },
            {
              path: '/home/index',
              name: 'index',
              component: () => import('@/pages/home/index.vue'),
              meta: {
                title: '关于'
              }
          }
        ]
    }
]