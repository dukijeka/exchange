import { QueryFunction } from "@tanstack/react-query";
import CurrencyPairApiResponse from "./CurrencyPairApiResponse.ts";

const baseURI = "http://localhost:4001/api/ticker";

const fetchExchangeRates: QueryFunction<
  CurrencyPairApiResponse[],
  ["exchangeRates", string]
> = async ({ queryKey }) => {
  const currency = queryKey[1];

  if (!currency) {
    return [];
  }

  const result = await fetch(`${baseURI}/${currency}`);

  if (!result.ok) {
    throw new Error(`Failed to fetch exchange rates for currency ${currency}`);
  }

  return result.json();
};

export default fetchExchangeRates;
