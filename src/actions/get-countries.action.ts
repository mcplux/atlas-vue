import restcountriesApi from '@/api/rescountries.api'
import type { Country } from '@/types/coutry.type'

export const getCountriesAction = async () => {
  try {
    const { data } = await restcountriesApi.get<Country[]>('/all?fields=name,flag')

    return data
  } catch (error) {
    console.error(error)
  }
}
