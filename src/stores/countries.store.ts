import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/types/country.type'
import { getCountriesAction } from '@/actions/get-countries.action'
import { getCountryAction } from '@/actions/get-country.action'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Country[]>([])
  const country = ref<Country | null>(null)

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

  const getCountry = async (name: string): Promise<{ success: boolean; error?: string }> => {
    const countryResponse = await getCountryAction(name)
    if (!countryResponse.success) {
      country.value = null
      return {
        success: false,
        error: countryResponse.error,
      }
    }

    country.value = countryResponse.data
    return {
      success: true,
    }
  }

  return {
    countries,
    country,
    getCountries,
    getCountry,
  }
})
