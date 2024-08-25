<script setup lang="ts">
import { getUrl } from '@/mixin/getUrl'

//back btn
import Backbutton from '@/components/BackButton.vue'
import { ref } from 'vue'

const props = defineProps({
  id: Number,
  caption: String,
  length: { type: Number, default: 0 },
  description: String,
  path: String,
  to_parent: String,
  name: String
})

const height = ref(0)
const loadImage = (e: any) => {
  height.value = e?.target?.height
}

const imgClick = (e: any) => {
  window.open(e.target.src)
 }
</script>

<template>
  <div id="DetailView" :name="name">
    <Backbutton :to_parent="to_parent" />

    <div class="bg-gray" :style="`height:${height}px`">
      <Transition name="drop" mode="out-in">
        <RouterLink class="left" v-if="Number(id) > 1" :to="'detail?id=' + (Number(id) - 1)">
          <p class="prev_btn">◀</p>
        </RouterLink>
      </Transition>
      <Transition name="fade" mode="out-in">
        <img id="detail_image" @click="imgClick" :key="Number(id)" :src="getUrl(`${path}-${Number(id)}.png`)" @load="loadImage" />
      </Transition>

      <Transition name="drop" mode="out-in">
        <RouterLink class="right" v-if="Number(id) < length" :to="'detail?id=' + (Number(id) + 1)">
          <p class="next_btn">▶</p>
        </RouterLink>
      </Transition>
    </div>

    <div class="text">
      <Transition name="fade" mode="out-in">
        <h2 :key="Number(id)">{{ caption }}</h2>
      </Transition>

      <Transition name="fade" mode="out-in">
        <p :key="Number(id)">{{ description }}</p>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#detail_image{
  cursor:pointer;
}
#DetailView {
  padding-top: 0;
  padding-bottom: 0;
}
.drop-enter-active {
  transition: all 1.5s var(--ease-default);
}
.drop-leave-active {
  transition: all 200ms var(--ease-default);
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  margin-bottom: -10px;
}
.fade-enter-active {
  transition: opacity 1.5s var(--ease-default);
}
.fade-leave-active {
  transition: opacity 200ms var(--ease-default);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.left,
.right {
  position: absolute;
  color: white;
  background: var(--color-base-middle-light);
  border-radius: 10px;
  opacity: 0.7;
  transition: margin 200ms var(--ease-default);
}
.left {
  left: 0;
  margin-left: 3%;
}
.right {
  right: 0;
  margin-right: 3%;
}
.bg-gray {
  min-height: 200px;
  box-sizing: content-box;
  transition: height 300ms var(--ease-default);
}
.text {
  margin: 1.2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    word-break: keep-all;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid var(--color-base-middle-light);
    width: 30vw;
    margin: 0 auto 0.5em;
  }
  > p {
    margin: 0;
    flex-grow: 1;
    width: 100%;
    font-size: smaller;
  }
}
[name='Illustration'] img {
  max-height: 65vh;
  max-width: 70%;
}
[name='Design'] img {
  max-height: 70vh;
  max-width: 75%;
}
</style>
