<script setup lang="ts">
import { ref, watch } from 'vue'
import DetailView from '@/components/DetailView.vue'

//url
import { useRoute } from 'vue-router'
const route = useRoute()
watch(route, (newValue = route) => {
  id.value = Number(newValue.query.id)
  store.increment(id.value - 1)
})
const id = ref(Number(route.query.id) * 1)

//store
import { useDesignsStore } from '@/stores/designs'
const store = useDesignsStore()
store.increment(id.value - 1)
</script>

<template>
  <DetailView
    :id="id"
    :caption="store.getDetails.caption"
    :length="store.items.length"
    :description="store.getDetails.description"
    :store="store"
    path="/src/assets/images/design/design"
    to_parent="/design"
    name="Design"
  />
</template>

<style lang="scss" scoped></style>
