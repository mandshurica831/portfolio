<script setup lang="ts">
import { getUrl } from '@/mixin/getUrl'
//store
import { useDesignsStore } from '@/stores/designs'
const store = useDesignsStore()
const list = store.items
</script>

<template>
  <div>
    <h1>Design</h1>
    <ul class="bg-gray">
      <li v-for="(item, index) in list" :key="item.caption">
        <RouterLink :to="'design/detail?id=' + (index + 1)">
          <img :src="getUrl(`/images/thumb/Design-${index + 1}.png`)" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  flex-wrap: wrap;
  margin: 1em;
  li {
    width: 280px;
    margin: 0.5em;
    transition:
      width 200ms var(--ease-default),
      transform 1s var(--ease-default);
    &:hover {
      transform: scale(1.03, 1.03);
    }
    img {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, .1);
    }
  }
}

@media (max-width: 1028px) {
  ul li {
    margin: 1em;
  }
}
@media (max-width: 840px) {
  ul li {
    width: 240px;
    margin: 0.8em;
  }
}
@media (max-width: 655px) {
  ul li {
    width: 300px;
    margin: 1em;
  }
}
</style>