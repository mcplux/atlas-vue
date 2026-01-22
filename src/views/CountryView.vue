<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name as string
</script>

<template>
  <div
    class="h-full flex flex-col lg:flex-row-reverse pt-5 md:pt-0 items-start lg:items-center gap-10 lg:px-10"
  >
    <div class="flex flex-col items-center border lg:w-1/2">
      <img src="https://flagcdn.com/ag.svg" alt="Antigua and Barbuda" class="w-full" />
      <p class="w-full text-center text-lg py-2 font-bold">Flag</p>
    </div>

    <div class="flex-1 lg:w-1/2">
      <h1 class="text-2xl lg:text-4xl uppercase font-bold">Antigua and Barbuda</h1>
      <div class="mt-10 flex flex-col gap-3">
        <p class="text-bold text-xl font-semibold">
          Official Name: <span class="font-normal">Antigua and Barbuda</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Capital: <span class="font-normal">Saint John's</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Continent: <span class="font-normal">Americas</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Region: <span class="font-normal">Caribbean</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Languages: <span class="font-normal">English</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Population: <span class="font-normal">103603</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Currency: <span class="font-normal">Eastern Caribbean dollar (XCD)</span>
        </p>
      </div>
    </div>
  </div>
</template>
