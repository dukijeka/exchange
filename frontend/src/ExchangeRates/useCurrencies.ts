import { useQuery } from "@tanstack/react-query";
import fetchExchangeRates from "./fetchExchangeRates.ts";
import CurrencyPair from "./CurrencyPair.ts";

const useCurrencies = (selectedCurrency: string) => {
  const results = useQuery({
    queryKey: ["exchangeRates", selectedCurrency],
    queryFn: fetchExchangeRates,
  });

  const currencyPairs = results?.data?.map((currencyPairApiResponse) => {
    const currencyPair: CurrencyPair = {
      sourceCurrency: selectedCurrency,
      targetCurrency: currencyPairApiResponse.pair
        .replace("-", "")
        .replace(selectedCurrency, ""),
      exchangeRate: 1 / currencyPairApiResponse.ask,
    };

    return currencyPair;
  });

  return {
    currencyPairs,
    status: results.status,
    availableCurrencies: currencyPairs?.map((pair) => pair.targetCurrency),
  };
};

export default useCurrencies;
