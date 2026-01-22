import restcountriesApi from '@/api/rescountries.api'
import type { Country } from '@/types/country.type'

export const getCountryAction = async (name: string) => {
  try {
    const { data } = await restcountriesApi.get<Country[]>(
      `/name/${name}?fields=name,flags,capital,continents,region,languages,population,currencies&fullText=true`,
    )

    return data[0]
  } catch (error) {
    console.error(error)
  }
}
