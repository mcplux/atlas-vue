import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const sidebar = ref(false)

  const openSidebar = () => {
    sidebar.value = true
  }

  const closeSidebar = () => {
    sidebar.value = false
  }

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }

  return {
    openSidebar,
    closeSidebar,
    toggleSidebar,
    isSidebarOpen: computed(() => sidebar.value),
  }
})
