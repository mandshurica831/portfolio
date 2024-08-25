<script setup lang="ts">
import { ref } from 'vue'

//route
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()

//header
import Header from './components/Header.vue'

//nav
import NavButton from './components/NavButton.vue'
const NavItems = ref([
  { name: 'Design', to: '/design' },
  { name: 'Illustration', to: '/illustration' },
  { name: 'Frontend', to: '/frontend' }
])

//animation controll
const isHeaderTransitionEnd = ref(false)
const isTitleAnimationEnd = ref(false)

const headerAnimationEnd = (e:any) =>{
  if (e?.target?.tagName != 'g') return
  isTitleAnimationEnd.value = true;
}
const headerTransitionEnd = (e:any) =>{
  if (e?.target?.tagName != 'svg') return
  isHeaderTransitionEnd.value = true
}
</script>

<template>
  <div :class="isTitleAnimationEnd ? '' : 'first'">
    <Header @animation-end="headerAnimationEnd" @transition-end="headerTransitionEnd" />

    <nav v-if="isTitleAnimationEnd" :class="route.path === '/' ? '' : 'short'">
      <ul>
        <li v-for="(item, index) in NavItems" :key="item.name">
          <RouterLink :to="item.to">
            <NavButton
              :item="item"
              :delay="150 * index"
              :name="item.name"
              :class="`${item.name}`"
            />
          </RouterLink>
        </li>
      </ul>
    </nav>

    <section>
      <wrap class="content-wrap">
        <RouterView
          class="router-view"
          :class="isTitleAnimationEnd && isHeaderTransitionEnd ? 'show-up-view' : ''"
        />
      </wrap>
    </section>
  </div>
</template>

<style scoped lang="scss">
.router-view {
  position: relative;
  bottom: var(--up-size);
  opacity: 0;
  padding: 3em 3.5em;
}
.router-view.show-up-view {
  animation: 0.6s 0s up forwards var(--ease-default);
}
.first .show-up-view {
  animation: 0.6s 2s up forwards var(--ease-default);
}
section {
  max-width: 1024px;
  margin: auto;
}
.content-wrap {
  max-width: 1024px;
  margin: 0 auto 0;
}
nav {
  position: absolute;
  bottom: 10vh;
  width: 100vw;
  font-size: 12px;
  margin-top: -6em;
  z-index: 2;
  transition: all 400ms var(--ease-default);
  &.short {
    position: fixed;
    bottom: 0;
    li {
      margin: 0;
    }
  }
  ul {
    overflow: hidden;
    max-width: 1024px;
    justify-content: center;
    place-items: center;
    margin: auto;
    li {
      list-style: none;
      margin: 0 10px;
      transition: all 1s var(--ease-OutCirc);
    }
  }
}

nav a.router-link-exact-active {
  color: var(--color-text-white);
}

nav a:first-of-type {
  border: 0;
  color: var(--color-text-white);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--color-text-white);
}
.navButton.Illustration {
  background: no-repeat top center url('@/assets/images/NavButton-Illustration.png');
}
.navButton.Design {
  background: no-repeat top center url('@/assets/images/NavButton-Design.png');
}
.navButton.Frontend {
  background: no-repeat top center url('@/assets/images/NavButton-Frontend.png');
}

</style>
