<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
import { useSidebarStore } from '@/stores/sidebar.store'
import { useSearchStore } from '@/stores/search.store'
import CountriesList from './CountriesList.vue'

const sidebarStore = useSidebarStore()
const searchStore = useSearchStore()
</script>

<template>
  <!-- Sidebar -->
  <aside
    class="fixed lg:static bg-orange-100 w-64 lg:w-96 h-screen z-10 transform transition-transform rounded-r-lg flex flex-col"
    :class="[sidebarStore.isSidebarOpen ? 'translate-x-0' : '-translate-x-full']"
  >
    <div class="w-full border-b py-5 px-10 flex justify-center items-end">
      <button
        class="flex justify-between border rounded w-full p-2 cursor-pointer hover:bg-orange-200 transition-colors"
        @click="searchStore.openModal"
      >
        Filter
        <MagnifyingGlassIcon class="size-6" />
      </button>
    </div>
    <div class="flex-1 overflow-auto p-5">
      <CountriesList />
    </div>
  </aside>

  <!-- Overlay (mobile only) -->
  <div
    v-if="sidebarStore.isSidebarOpen"
    @click="sidebarStore.closeSidebar"
    class="fixed inset-0 bg-black/40 backdrop-blur-xs lg:hidden"
  />
</template>
