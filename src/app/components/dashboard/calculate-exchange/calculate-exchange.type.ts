export interface CurrencyFormData {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}

export interface ExchangeCalculationPayload {
  originCurrencyCode: string;
  targetCurrencyCode: string;
  originAmount: number;
}

export interface ExchangeCalculationResponse {
  originCurrencyCode: string;
  targetCurrencyCode: string;
  originAmount: number;
  targetAmount: number;
}
