<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useCountriesStore } from '@/stores/countries.store'
import { useSidebarStore } from '@/stores/sidebar.store'
import LoadingSpinner from './LoadingSpinner.vue'

const countriesStore = useCountriesStore()
const sidebarStore = useSidebarStore()

const error = reactive({
  error: true,
  msg: 'Juano',
})
const loading = ref(false)

const handleClick = () => {
  if (window.innerWidth < 1024) {
    sidebarStore.closeSidebar()
  }
}

onMounted(async () => {
  loading.value = true
  const response = await countriesStore.getCountries()
  error.error = !response.success
  error.msg = response.error ?? ''
  loading.value = false
})
</script>

<template>
  <p v-if="error.error">
    {{ error.msg ?? 'Somethin went wrong' }}
  </p>

  <div v-else>
    <div v-if="loading" class="flex w-full justify-center">
      <LoadingSpinner />
    </div>

    <ul v-else>
      <li
        v-for="country in countriesStore.countries"
        :key="`${country.flag} ${country.name.common}`"
      >
        <RouterLink
          :to="{ name: 'country', params: { name: country.name.common } }"
          class="block p-2 hover:bg-orange-200 rounded truncate"
          @click="handleClick"
        >
          {{ `${country.flag} ${country.name.common}` }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
