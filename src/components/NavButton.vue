<script setup>
const props = defineProps({
  delay: Number,
  name: String
})
</script>
<template>
  <div class="navButton" :style="`animation-delay:${delay}ms;`">
    <p class="label">{{ name }}</p>
  </div>
</template>

<style scoped>
.short .navButton {
  height: 24px;
}
.short .navButton .label {
  height: 24px;
  line-height: 24px;
}
.navButton {
  height: 180px;
  width: 280px;
  background: #fff;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transform: scale(1, 1);
  transition:
    200ms height var(--ease-OutCirc),
    2s transform var(--ease-OutCirc),
    500ms width var(--ease-OutCirc);
  position: relative;
  bottom: var(--up-size);
  opacity: 0;
  animation: 1s 1.3s up forwards var(--ease-default);
}
.navButton:hover {
  transform: scale(1.03, 1.03);
  .label {
    background: var(--color-sub);
  }
}
.router-link-active .label {
  background: var(--color-sub);
}
.label {
  flex-grow: 1;
  height: 32px;
  line-height: 32px;
  font-size: 15px;
  background: var(--color-base);
  transition: 600ms all var(--ease-OutCirc);
}
p {
  margin: 0;
}
@media (max-width: 840px) {
  .navButton {
    width: 120px;
    margin: -5px;
  }
}
</style>
