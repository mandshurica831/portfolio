import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIllustrationsStore = defineStore('illustrations', () => {
  const items = [
    {
      caption: 'オリジナルキャラクター・オリジナルイラスト',
      description: '使用ソフト： Adobe Illustrator ／制作時間：約7日'
    },
    {
      caption: 'ファンアート（ポケットモンスター）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：8時間'
    },
    {
      caption: 'ファンアート（UNDERTALE)',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：3時間'
    },
    {
      caption: 'ファンアート（キャットバスターズ）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：8時間'
    },
    {
      caption: 'ファンアート（キャットバスターズ）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：5時間'
    },
    {
      caption: 'ファンアート（キャットバスターズ）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：6時間'
    },
    {
      caption: 'ファンアート（アズールレーン）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：5時間'
    },
    {
      caption: 'ファンアート（けものフレンズ）',
      description: '使用ソフト： CLIP STUDIO PAINT ／制作時間：各2時間'
    }
  ]
  const caption = ref('')
  const description = ref('')

  const data = {
    caption: caption,
    description: description
  }

  const getDetails = computed(() => data)

  function increment(id: any) {
    caption.value = items[id].caption
    description.value = items[id].description
  }

  return { items, getDetails, increment }
})
