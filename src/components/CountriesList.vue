<script setup lang="ts">
import { onMounted } from 'vue'
import { useCountriesStore } from '@/stores/countries.store'

const countriesStore = useCountriesStore()

onMounted(() => {
  countriesStore.getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countriesStore.countries" :key="`${country.flag} ${country.name.common}`">
      <RouterLink
        :to="{ name: 'country', params: { name: country.name.common } }"
        class="block p-2 hover:bg-orange-200 rounded truncate"
      >
        {{ `${country.flag} ${country.name.common}` }}
      </RouterLink>
    </li>
  </ul>
</template>
