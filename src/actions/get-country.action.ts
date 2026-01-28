import restcountriesApi from '@/api/rescountries.api'
import type { Country } from '@/types/country.type'
import { isAxiosError } from 'axios'

type GetCountryResponse =
  | {
      success: true
      data: Country
    }
  | {
      success: false
      error: string
    }

export const getCountryAction = async (name: string): Promise<GetCountryResponse> => {
  try {
    const { data } = await restcountriesApi.get<Country[]>(
      `/name/${name}?fields=name,flags,capital,continents,region,languages,population,currencies&fullText=true`,
    )

    if (!data[0]) {
      return {
        success: false,
        error: `Country with name ${name} not found`,
      }
    }

    return {
      success: true,
      data: data[0],
    }
  } catch (error) {
    if (isAxiosError(error) && error.status === 404) {
      return {
        success: false,
        error: `Country with name ${name} not found`,
      }
    }

    console.error(error)
    return {
      success: false,
      error: 'Something went wrong while fetching countries',
    }
  }
}
