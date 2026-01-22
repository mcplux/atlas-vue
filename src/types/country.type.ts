export interface Country {
  flag: string
  flags: Flags
  name: Name
  currencies: Currencies
  capital: string[]
  region: string
  languages: Languages
  population: number
  continents: string[]
}

interface Currencies {
  [code: string]: Currency
}

interface Currency {
  name: string
  symbol: string
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface Languages {
  [code: string]: string
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

interface NativeName {
  [code: string]: NativeNameLang
}

interface NativeNameLang {
  official: string
  common: string
}
