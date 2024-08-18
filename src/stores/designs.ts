import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDesignsStore = defineStore('designs', () => {
  const items = [
    {
      caption: 'バナーデザイン',
      description: '制作ソフト： Adobe Photoshop, Adobe Illustrator ／制作時間：2~10時間'
    },
    {
      caption: 'UIデザイン①',
      description: '制作ソフト： Adobe Photoshop, Adobe Illustrator ／制作時間：2~10時間'
    },
    {
      caption: 'UIデザイン②',
      description: '制作ソフト： Adobe Photoshop, Adobe Illustrator ／制作時間：2~10時間'
    }
  ]
  const caption = ref('')
  const description = ref('')

  const data = {
    caption: caption,
    description: description
  }

  const getDetails = computed(() => data)

  function increment(id: number) {
    caption.value = items[id].caption
    description.value = items[id].description
  }

  return { items, getDetails, increment }
})
