<script setup lang="ts">
import { getCountryAction } from '@/actions/get-country.action'
import type { Country } from '@/types/country.type'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const country = ref<Country | null>(null)

const formatCurrencies = (currencies: Country['currencies']): string => {
  return Object.entries(currencies)
    .map(([code, { name, symbol }]) => `${name} (${code}, ${symbol})`)
    .join(', ')
}

watch(
  () => route.params.name,
  async (newName) => {
    country.value = (await getCountryAction(newName as string)) ?? null
  },
  { immediate: true },
)
</script>

<template>
  <p v-if="!country">Country with name {{ route.params.name }} not found</p>

  <div
    v-else
    class="h-full flex flex-col lg:flex-row-reverse pt-5 lg:pt-0 items-start lg:items-center gap-10 lg:px-10"
  >
    <div class="flex flex-col items-center border lg:w-1/2">
      <img :src="country.flags.svg" :alt="country.flags.alt" class="w-full" />
      <p class="w-full text-center text-lg py-2 font-bold">Flag</p>
    </div>

    <div class="flex-1 lg:w-1/2">
      <h1 class="text-2xl lg:text-4xl uppercase font-bold">{{ country.name.common }}</h1>
      <div class="mt-10 flex flex-col gap-3">
        <p class="text-bold text-xl font-semibold">
          Official Name: <span class="font-normal">{{ country.name.official }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Capital: <span class="font-normal">{{ country.capital.join(', ') }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Continent: <span class="font-normal">{{ country.continents.join(', ') }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Region: <span class="font-normal">{{ country.region }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Languages:
          <span class="font-normal">{{ Object.values(country.languages).join(', ') }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Population: <span class="font-normal">{{ country.population.toLocaleString() }}</span>
        </p>
        <p class="text-bold text-xl font-semibold">
          Currency:
          <span class="font-normal">{{ formatCurrencies(country.currencies) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
