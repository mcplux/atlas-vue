<script setup lang="ts">
import { Bars3BottomLeftIcon, Cog6ToothIcon } from '@heroicons/vue/16/solid'
import { ref } from 'vue'

const isSidebarOpen = ref(false)
const closeSidebar = () => {
  isSidebarOpen.value = false
}
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <!-- Screen -->
  <div class="bg-orange-200 min-h-screen">
    <!-- Sidebar -->
    <aside
      class="fixed bg-orange-100 w-64 lg:w-96 h-screen z-10 transform transition-transform"
      :class="[isSidebarOpen ? 'translate-x-0' : '-translate-x-full']"
    >
      Sidebar
    </aside>

    <!-- Overlay (mobile only) -->
    <div
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs"
    />

    <!-- Main content div -->
    <div class="px-5 pt-10 container mx-auto">
      <!-- Header -->
      <header class="flex justify-between">
        <button @click="toggleSidebar">
          <Bars3BottomLeftIcon class="size-8" />
        </button>
        <button>
          <Cog6ToothIcon class="size-8" />
        </button>
      </header>

      <!-- Main content -->
      <main class="mt-10">Main</main>
    </div>
  </div>
</template>
