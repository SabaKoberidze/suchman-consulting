<template>
  <appHeader></appHeader>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
  </router-view>
  <footer></footer>
</template>

<script setup lang="ts" >
import appHeader from './components/appHeader.vue';

</script>

<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
