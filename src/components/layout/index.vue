<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :default-active="$route.path"
      router
    >
      <sideMenu v-for="item in list" :key="item" :list="item"></sideMenu>
    </el-menu>
  </div>
</template>
<script setup>
import sideMenu from './sideMenu.vue'
const list = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
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
        component: () => import('@/views/sys-urers/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/sys/roles',
        name: 'sys-roles',
        component: () => import('@/views/sys-roles/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'Plus'
        }
      },
      {
        path: '/sys/menus',
        name: 'sys-menus',
        component: () => import('@/views/sys-menus/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Menu'
        }
      }
    ]
  },
  {
    path: '/sysd',
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
        component: () => import('@/views/sys-dicts/index.vue'),
        meta: {
          title: '数字字典',
          icon: 'Tickets'
        }
      }
    ]
  }
]
</script>
<style scoped lang="scss"></style>
