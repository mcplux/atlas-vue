<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
</script>

<template>
  <div class="h-screen flex flex-col items-center gap-10 pt-32">
    <h1 class="text-5xl text-center font-bold">Which country would you like to search for?</h1>
    <button
      class="p-5 bg-orange-100 rounded-full cursor-pointer hover:bg-orange-200 transition-colors"
    >
      <MagnifyingGlassIcon class="size-16" />
    </button>
  </div>
</template>
