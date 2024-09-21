import { useQuery } from "@tanstack/react-query";
import fetchExchangeRates from "./fetchExchangeRates.ts";
import CurrencyPair from "./model/CurrencyPair.ts";

const useCurrencies = (selectedCurrency: string) => {
  const results = useQuery({
    queryKey: ["exchangeRates", selectedCurrency],
    queryFn: fetchExchangeRates,
  });

  const currencyPairs = results?.data
    ?.filter(
      (currencyPairApiResponse) =>
        currencyPairApiResponse.currency !== selectedCurrency,
    )
    .map((currencyPairApiResponse) => {
      const currencyPair: CurrencyPair = {
        sourceCurrency: selectedCurrency,
        targetCurrency: currencyPairApiResponse.pair
          .replace("-", "")
          .replace(selectedCurrency, ""),
        exchangeRate: currencyPairApiResponse.ask,
      };

      return currencyPair;
    });

  if (!currencyPairs) {
    return {
      currencyPairs: [],
      status: results.status,
      availableCurrencies: [],
    };
  }

  return {
    currencyPairs,
    status: results.status,
    availableCurrencies: [
      ...currencyPairs.map((pair) => pair.targetCurrency),
      selectedCurrency,
    ],
  };
};

export default useCurrencies;
