import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/types/country.type'
import { getCountriesAction } from '@/actions/get-countries.action'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Country[]>([])

  const getCountries = async (): Promise<{ success: boolean; error?: string }> => {
    const countriesResponse = await getCountriesAction()
    if (!countriesResponse.success) {
      countries.value = []
      return {
        success: false,
        error: countriesResponse.error,
      }
    }

    countries.value = countriesResponse.data
    return {
      success: true,
    }
  }

  return {
    countries,
    getCountries,
  }
})
