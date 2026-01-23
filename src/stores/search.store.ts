import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const modal = ref(false)

  const openModal = () => {
    modal.value = true
  }

  const closeModal = () => {
    modal.value = false
  }

  return {
    openModal,
    closeModal,
    isModalOpen: computed(() => modal.value),
  }
})
