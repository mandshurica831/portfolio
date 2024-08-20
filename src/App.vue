<script setup lang="ts">
import { ref } from 'vue'

//route
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()

//header
import Title from './components/TitleSVG.vue'

//nav
import NavButton from './components/NavButton.vue'
const NavItems = ref([
  { name: 'Design', to: '/design' },
  { name: 'Illustration', to: '/illustration' },
  { name: 'Frontend', to: '/frontend' }
])

//animation controll
const isTitleAnimationEnd = ref(false)
const isHeaderTransitionEnd = ref(false)

const transitionStartChk = (e: any) => {
  if (e?.target?.tagName == 'path') return
  isHeaderTransitionEnd.value = false
}
</script>

<template>
  <div :class="isTitleAnimationEnd ? '' : 'first'">
    <wrap class="header-wrap" :class="route.path === '/' ? '' : ' short'">
      <header
        :class="route.path === '/' ? '' : 'short'"
        @transitionstart="transitionStartChk"
        @transitionend="isHeaderTransitionEnd = true"
      >
        <wrap class="header-inner-wrap">
          <RouterLink to="/">
            <Title id="title" width="300" height="40" @animationend="isTitleAnimationEnd = true" />
          </RouterLink>
          <RouterLink to="/profile">
            <p class="sub_title">RIE TANAKA</p>
          </RouterLink>
        </wrap>
      </header>
    </wrap>

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
.header-wrap {
  width: 100vw;
  height: 75vh;
  margin-bottom: 20vh;
  position: relative;
  display: flex;
  justify-content: center;
  &.short {
    height: 80px;
    margin-bottom: 0;
  }
}
.header-inner-wrap {
  position: relative;
  margin-bottom: 5vh;
}
header {
  position: relative;
  background: var(--color-main);
  height: 75vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
  transition: height 700ms var(--ease-OutCirc);
  z-index: 2;
}
header.short {
  height: 80px;
  position: fixed;
  .header-inner-wrap {
    margin-bottom: 0;
  }
}
.first .header-inner-wrap > a {
  cursor: default;
}
.first header {
  animation: 1s 0s header-animation 1 var(--ease-header-first);
}
.first header.short {
  animation: 1s 0s header-animation-short 1 var(--ease-header-first);
}
#title {
  bottom: var(--up-size);
  position: relative;
  animation: 0.6s 1s up forwards var(--ease-default);
  width: 500px;
  transition: 500ms width var(--ease-OutCirc);
}
.sub_title {
  bottom: var(--up-size);
  position: relative;
  margin-top: 0.5em;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: transparent;
  animation: 0.6s 1.2s show-up forwards var(--ease-default);
  line-height: 1em;
}
.short {
  .sub_title {
    margin-top: 0;
    line-height: 0.5em;
  }
  .name {
    margin-top: 0;
  }
  #title {
    width: 300px;
  }
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

@media (max-width: 840px) {
  #title {
    width: 300px;
  }
  header {
    height: 75vh;
  }
}
</style>
