<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCountriesAction } from '@/actions/get-countries.action'
import type { Country } from '@/types/coutry.type'

const countries = ref<Country[]>([])

onMounted(async () => {
  countries.value = (await getCountriesAction()) ?? []
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="`${country.flag} ${country.name.common}`">
      <RouterLink
        :to="{ name: 'country', params: { name: country.name.common } }"
        class="block p-2 hover:bg-orange-200 rounded truncate"
      >
        {{ `${country.flag} ${country.name.common}` }}
      </RouterLink>
    </li>
  </ul>
</template>
