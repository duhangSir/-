<template>
  <div class="about">
    <div class="left">
      <layout></layout>
    </div>
    <div class="right">
      <div class="right-top">
        <div class="vueadmin">VueAdmin后台管理系统</div>
        <div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              test
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="mine">个人中心</el-dropdown-item>
                <el-dropdown-item command="remove">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="right-tagsview">
        <div
          v-for="(item, index) in tagsview"
          @click="push(item.path)"
          :key="index"
          :class="{ active: item.path === $route.path }"
        >
          {{ item.title }}
          <span @click="removetags(index)" v-if="item.path === $route.path"
            >x</span
          >
        </div>
      </div>
      <div class="right-bottom">
        <routerView></routerView>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Twofilter } from '../untils/untils'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { watch } from 'vue'
import routerView from '../components/layout/routeView.vue'
import layout from '../components/layout/index.vue'
const router = useRouter()
const route = useRoute()
const store = useStore()
Twofilter(router.getRoutes())
const push = (path) => {
  router.push(path)
}
const handleCommand = (command) => {
  console.log(command)
  if (command === 'remove') {
    store.dispatch('user/removeToken')
    router.push('/login')
  }
}
const tagsview = store.getters.tagsview
const removetags = (index) => {
  store.commit('user/removetagsview', index)
}
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    const obj = {
      path: route.path,
      title: route.meta.title
    }
    store.commit('user/setTagsview', obj)
  },
  { immediate: true, deep: true }
)

// import {
//   Menu,
//   User,
//   Plus,
//   HomeFilled,
//   Setting,
//   Tickets,
//   Operation
// } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.about {
  height: 100vh;
  width: 100vw;
  position: relative;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    background-color: #545c64;
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
  .right {
    margin-left: 200px;
    .right-top {
      display: flex;
      height: 50px;
      background-color: #17b3a3;
      line-height: 50px;
      .vueadmin {
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .right-tagsview {
      display: flex;
      height: 50px;
      line-height: 50px;
      div {
        padding: 0 20px;
        text-align: center;
        border: 1px solid #e4e7ed;
      }
      span {
        cursor: pointer;
      }
    }
    .right-bottom {
      height: 100%;
    }
  }
}
.active {
  color: #afc7ff;
}
</style>
