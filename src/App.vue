<script setup lang="ts">
import { Bars3BottomLeftIcon, Cog6ToothIcon } from '@heroicons/vue/16/solid'
import SearchModal from './components/SearchModal.vue'
import AppSidebar from './components/AppSidebar.vue'
import { useSidebarStore } from './stores/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <!-- Screen -->
  <div class="min-h-screen flex bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat text-gray-600">
    <AppSidebar />

    <!-- Main content div -->
    <div
      class="w-full transition-all max-h-screen overflow-auto"
      :class="[sidebarStore.isSidebarOpen ? 'lg:ml-0' : 'lg:-ml-96']"
    >
      <!-- Container -->
      <div class="container mx-auto px-5 pt-10 flex flex-col h-full">
        <!-- Header -->
        <header class="flex justify-between">
          <button @click="sidebarStore.toggleSidebar">
            <Bars3BottomLeftIcon class="size-10" />
          </button>
          <button>
            <Cog6ToothIcon class="size-10" />
          </button>
        </header>

        <!-- Main content -->
        <main class="flex-1">
          <RouterView />
        </main>
      </div>
    </div>

    <SearchModal />
  </div>
</template>
