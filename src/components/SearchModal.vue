<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/16/solid'
import { useSearchStore } from '@/stores/search.store'
import { useCountriesStore } from '@/stores/countries.store'
import { useSidebarStore } from '@/stores/sidebar.store'
import { type Country } from '@/types/country.type'

const searchStore = useSearchStore()
const countriesStore = useCountriesStore()
const sidebarStore = useSidebarStore()

const searchQuery = ref('')
const filteredCountries = ref<Country[]>([])
const inputRef = ref<HTMLInputElement | null>(null)

const handleCloseModal = () => {
  filteredCountries.value = []
  searchQuery.value = ''

  if (window.innerWidth < 1024) {
    sidebarStore.closeSidebar()
  }
  searchStore.closeModal()
}

const isEmpty = computed(() => filteredCountries.value.length === 0)
const searching = computed(() => searchQuery.value !== '')

watch(searchQuery, (newValue) => {
  if (newValue === '') {
    filteredCountries.value = []
  } else {
    filteredCountries.value = countriesStore.filterData(newValue)
  }
})

watch(
  inputRef,
  async (newInput) => {
    if (!newInput) return

    newInput.focus()
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div
    v-if="searchStore.isModalOpen"
    @click="handleCloseModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-30 backdrop-blur-xs"
  >
    <div
      @click.stop
      class="flex flex-col bg-orange-100 rounded-xl shadow-lg w-full max-w-2xl h-150 max-h-screen p-6 mx-5"
    >
      <div class="flex justify-end">
        <button class="cursor-pointer" @click="handleCloseModal">
          <XMarkIcon class="size-8" />
        </button>
      </div>
      <h2 class="text-2xl font-semibold mb-2 text-center">Search a country</h2>
      <input
        ref="inputRef"
        type="text"
        class="border w-full mt-5 p-2 rounded"
        v-model="searchQuery"
        placeholder="e.g. Colombia"
      />

      <div class="mt-5 flex-1 overflow-auto">
        <p v-if="!searching" class="text-center">Type something...</p>
        <template v-else>
          <p v-if="isEmpty" class="text-center text-red-600">No record found</p>

          <ul v-else>
            <li
              v-for="country in filteredCountries"
              :key="`${country.flag} ${country.name.common}`"
            >
              <RouterLink
                :to="{ name: 'country', params: { name: country.name.common } }"
                class="block p-2 hover:bg-orange-200 rounded truncate"
                @click="handleCloseModal"
              >
                {{ `${country.flag} ${country.name.common}` }}
              </RouterLink>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>
