export enum ECurrenciesDenominations {
  RUB = 'Рубль',
  USD = 'Доллар',
  EUR = 'Евро',
  GBP = 'Фунт',
}

export enum ECurrenciesSigns {
  RUB = '₽',
  USD = '$',
  EUR = '€',
  GBP = '£',
}

export enum ECurrenciesAbbreviations {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export type TCategory = {
  name: string;
  icon?: string;
}

export type TTag = {
  name: string;
  color: string;
}

export type TCurrency = {
  sign: ECurrenciesSigns;
  denomination: ECurrenciesDenominations;
  rateToRuble: number;
}