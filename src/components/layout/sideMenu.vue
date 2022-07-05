<template>
  <template v-if="props.list && !props.list.children">
    <el-menu-item :index="props.list.path">
      <!-- <el-icon><HomeFilled /></el-icon> -->
      <span>{{ props.list.meta.title }}</span>
    </el-menu-item>
  </template>
  <template
    v-if="props.list && props.list.children && props.list.children.length > 0"
  >
    <el-sub-menu :index="props.list.path">
      <template #title>
        <!-- <el-icon> </el-icon> -->
        <span>{{ props.list.meta.title }}</span>
      </template>
      <sideMenu
        v-for="item in props.list.children"
        :key="item"
        :list="item"
      ></sideMenu>
    </el-sub-menu>
  </template>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  list: {
    type: Object,
    default: () => {}
  }
})
</script>
<style scoped lang="scss"></style>
