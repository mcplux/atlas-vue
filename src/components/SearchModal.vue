<script setup lang="ts">
import { ref } from 'vue'

const modalOpen = ref(true)

const closeModal = () => {
  modalOpen.value = false
}

const openModal = () => {
  modalOpen.value = true
}

defineExpose({
  openModal,
})
</script>

<template>
  <div
    v-if="modalOpen"
    @click="closeModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-30 backdrop-blur-xs"
  >
    <div @click.stop class="bg-orange-100 rounded-xl shadow-lg w-full max-w-2xl p-6 mx-5 relative">
      <h2 class="text-2xl font-semibold mb-2">Search a country</h2>
      <p class="text-gray-600 mb-4">Coming soon...</p>
    </div>
  </div>
</template>
