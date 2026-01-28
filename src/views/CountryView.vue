<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useCountriesStore } from '@/stores/countries.store'
import type { Country } from '@/types/country.type'
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const countriesStore = useCountriesStore()

const loading = ref(false)
const error = reactive({
  error: true,
  msg: '',
})

const formatCurrencies = (currencies: Country['currencies']): string => {
  return Object.entries(currencies)
    .map(([code, { name, symbol }]) => `${name} (${code}, ${symbol})`)
    .join(', ')
}

watch(
  () => route.params.name,
  async (newName) => {
    loading.value = true
    const response = await countriesStore.getCountry(newName as string)
    error.error = !response.success
    error.msg = response.error ?? ''
    loading.value = false
  },
  { immediate: true },
)
</script>

<template>
  <div class="h-full w-full flex justify-center items-center" v-if="loading">
    <LoadingSpinner />
  </div>

  <div v-if="error.error && !loading" class="flex h-full w-full items-center justify-center">
    <p
      class="text-lg font-bold border border-red-800 bg-red-200 text-red-800 max-w-4xl w-full text-center p-5 rounded"
    >
      {{ error.msg || 'Something went wrong' }}
    </p>
  </div>

  <div
    v-if="countriesStore.country && !error.error && !loading"
    class="h-full flex flex-col lg:flex-row-reverse pt-5 lg:pt-0 items-start lg:items-center gap-10 lg:px-10"
  >
    <div class="flex flex-col items-center border lg:w-1/2">
      <img
        :src="countriesStore.country!.flags.svg"
        :alt="countriesStore.country!.flags.alt"
        class="w-full"
      />
      <p class="w-full text-center text-lg py-2 font-bold">Flag</p>
    </div>

    <div class="flex-1 lg:w-1/2">
      <h1 class="text-2xl lg:text-4xl uppercase font-bold">
        {{ countriesStore.country!.name.common }}
      </h1>
      <div class="mt-10 flex flex-col gap-3">
        <p class="text-bold text-xl font-semibold">
          Official Name:
          <span class="font-normal">{{ countriesStore.country!.name.official }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Capital: <span class="font-normal">{{ countriesStore.country!.capital.join(', ') }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Continent:
          <span class="font-normal">{{ countriesStore.country!.continents.join(', ') }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Region: <span class="font-normal">{{ countriesStore.country!.region }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Languages:
          <span class="font-normal">{{
            Object.values(countriesStore.country!.languages).join(', ')
          }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Population:
          <span class="font-normal">{{ countriesStore.country!.population.toLocaleString() }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Currency:
          <span class="font-normal">{{
            formatCurrencies(countriesStore.country!.currencies)
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
