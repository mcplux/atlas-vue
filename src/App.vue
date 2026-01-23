<script setup lang="ts">
import { ref } from 'vue'
import { Bars3BottomLeftIcon, Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
import CountriesList from './components/CountriesList.vue'
import SearchModal from './components/SearchModal.vue'

const isSidebarOpen = ref(false)
const searchModelRef = ref<InstanceType<typeof SearchModal> | null>(null)

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <!-- Screen -->
  <div class="min-h-screen flex bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat text-gray-600">
    <!-- Sidebar -->
    <aside
      class="fixed lg:static bg-orange-100 w-64 lg:w-96 h-screen z-10 transform transition-transform rounded-r-lg flex flex-col"
      :class="[isSidebarOpen ? 'translate-x-0' : '-translate-x-full']"
    >
      <div class="w-full border-b py-5 px-10 flex justify-center items-end">
        <button
          class="flex justify-between border rounded w-full p-2 cursor-pointer hover:bg-orange-200 transition-colors"
          @click="searchModelRef?.openModal"
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
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs lg:hidden"
    />

    <!-- Main content div -->
    <div
      class="w-full transition-all max-h-screen overflow-auto"
      :class="[isSidebarOpen ? 'lg:ml-0' : 'lg:-ml-96']"
    >
      <!-- Container -->
      <div class="container mx-auto px-5 pt-10 flex flex-col h-full">
        <!-- Header -->
        <header class="flex justify-between">
          <button @click="toggleSidebar">
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

    <SearchModal ref="searchModelRef" />
  </div>
</template>
