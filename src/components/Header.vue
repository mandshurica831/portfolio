<script setup lang="ts">

//route
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()

//logo
import Title from './TitleSVG.vue'

</script>


<template>
<wrap class="header-wrap" :class="route.path === '/' ? '' : ' short'">
    <header
      :class="route.path === '/' ? '' : 'short'"
      @transitionend="$emit('transitionEnd', $event)"
    >
      <wrap class="header-inner-wrap">
        <RouterLink to="/">
          <Title id="title" width="300" height="40" @animationend="$emit('animationEnd', $event)" />
        </RouterLink>
        <RouterLink to="/profile">
          <p class="sub_title">RIE TANAKA</p>
        </RouterLink>
      </wrap>
    </header>
</wrap>
</template>


<style scoped lang="scss">
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
    width: 500px;
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
  line-height: 1em;
  display: inline-block;
  transition: all 300ms var(--ease-default);
  animation: 0.6s 1.2s show-up forwards var(--ease-default);
  &:hover{
    // text-shadow: 2px 2px 0px #ffc65c,-2px 2px 0px #ffc65c,-2px -2px 0px #ffc65c,2px -2px 0px #ffc65c;
  }
}
.short {
  .sub_title {
    margin-top: 0;
    line-height: 0.5em;
  }
  .name {
    margin-top: 0;
  }
  #title,
  .header-inner-wrap {
    width: 300px;
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

@media (max-width: 840px) {
  #title,
  .header-inner-wrap{
    width: 300px;
  }
  header {
    height: 75vh;
  }
}
</style>