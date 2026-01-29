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

  const cleanStr = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '')
  }

  const filterData = (query: string): Country[] => {
    const cleanedQuery = cleanStr(query)

    return countries.value.filter((country) => {
      const { name } = country
      if (cleanStr(name.common).includes(cleanedQuery)) {
        return country
      }

      if (cleanStr(name.official).includes(cleanedQuery)) {
        return country
      }

      for (const lang in name.nativeName) {
        const nativeName = name.nativeName[lang]!
        if (cleanStr(nativeName.common).includes(cleanedQuery)) {
          return country
        }

        if (cleanStr(nativeName.official).includes(cleanedQuery)) {
          return country
        }
      }
    })
  }

  return {
    countries,
    country,
    getCountries,
    getCountry,
    filterData,
  }
})
