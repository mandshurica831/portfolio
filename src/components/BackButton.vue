<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  to_parent: String
})
</script>
<template>
  <RouterLink id="Backbutton" :to="to_parent">
    <div>⇧</div>
  </RouterLink>
</template>

<style scoped lang="scss">
#Backbutton {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 3;
  font-size: 26px;
  line-height: 32px;
  height: 32px;
  width: 40px;
  width: 40px;
  cursor: pointer;
  color: var(--color-base);
  animation: 0.6s 0s up forwards var(--ease-default);
  transition: color 2s var(--ease--default);
  &:hover {
    color: var(--color-main);
  }
}
</style>
