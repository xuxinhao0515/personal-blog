import Layout from '@/layout/index.vue'

export default [
    {
        path: '/home',
        name: 'home',
        component: Layout,
        redirect: '/home/selfintroduction',
        meta: {
          title: '我的',
          icon: 'sidebar_my'
        },
        children: [
            {
                path: '/home/selfintroduction',
                name: 'selfintroduction',
                component: () => import('@/pages/home/selfintroduction.vue'),
                meta: {
                  title: '个人介绍'
                }
            },
            {
              path: '/home/selfskills',
              name: 'selfskills',
              component: () => import('@/pages/home/selfskills.vue'),
              meta: {
                title: '个人技能'
            }
          }
        ]
    }
]