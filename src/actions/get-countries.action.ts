import restcountriesApi from '@/api/rescountries.api'
import type { Country } from '@/types/country.type'

type GetCountriesResponse =
  | {
      success: true
      data: Country[]
    }
  | {
      success: false
      error: string
    }

export const getCountriesAction = async (): Promise<GetCountriesResponse> => {
  try {
    const { data } = await restcountriesApi.get<Country[]>('/all?fields=name,flag')

    return {
      success: true,
      data: data,
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong while fetching countries',
    }
  }
}
