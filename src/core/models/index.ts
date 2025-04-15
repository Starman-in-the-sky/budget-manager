export enum ECurrenciesDenominations {
  Ruble = 'Рубль',
  Dollar = 'Доллар',
  Euro = 'Евро',
  Pound = 'Фунт',
}

export enum ECurrenciesSigns {
  Ruble = '₽',
  Dollar = '$',
  Euro = '€',
  Pound = '£',
}

export type TCategory = {
  name: string;
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