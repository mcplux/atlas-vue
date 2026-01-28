<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
import { useSidebarStore } from '@/stores/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center gap-10">
    <h1 class="text-5xl text-center font-bold">Which country would you like to search for?</h1>
    <button
      @click="sidebarStore.openSidebar"
      class="p-5 bg-orange-100 rounded-full cursor-pointer hover:bg-orange-200 transition-colors"
    >
      <MagnifyingGlassIcon class="size-16" />
    </button>
  </div>
</template>
