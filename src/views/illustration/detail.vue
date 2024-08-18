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
import { useIllustrationsStore } from '@/stores/illustrations'
const store = useIllustrationsStore()
store.increment(id.value - 1)

const caption = ref(store.getDetails.caption)
const length = ref(store.items?.length)
const description = ref(store.getDetails.description)
</script>

<template>
  <DetailView
    :id="id"
    :caption="caption"
    :length="length"
    :description="description"
    path="/src/assets/images/illustration/illustration"
    to_parent="/illustration"
    name="Illustration"
  />
</template>

<style lang="scss" scoped></style>
