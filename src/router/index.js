import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/vueadmin',
    redirect: '/index',
    name: 'home',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue'),
        meta: {
          title: '首页',
          meta: 'HomeFilled'
        }
      },
      {
        path: '/sys',
        redirect: '/sys/users',
        meta: {
          title: '系统管理',
          icon: 'Operation'
        },
        children: [
          {
            path: '/sys/users',
            name: 'sys-users',
            component: () => import('../views/sys-urers/index.vue'),
            meta: {
              title: '用户管理',
              icon: 'User'
            }
          },
          {
            path: '/sys/roles',
            name: 'sys-roles',
            component: () => import('../views/sys-roles/index.vue'),
            meta: {
              title: '角色管理',
              icon: 'Plus'
            }
          },
          {
            path: '/sys/menus',
            name: 'sys-menus',
            component: () => import('../views/sys-menus/index.vue'),
            meta: {
              title: '菜单管理',
              icon: 'Menu'
            }
          }
        ]
      },
      {
        path: '/sys',
        name: '/sys',
        redirect: '/sys/dicts',
        meta: {
          title: '系统工具',
          icon: 'Setting'
        },
        children: [
          {
            path: '/sys/dicts',
            name: 'sys-dicts',
            component: () => import('../views/sys-dicts/index.vue'),
            meta: {
              title: '数字字典',
              icon: 'Tickets'
            }
          }
        ]
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
