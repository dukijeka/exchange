import { useState } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import ExchangeResultsTable from "./ExchangeResultsTable/ExchangeResultsTable.tsx";
import ExchangeParameters from "./ExchangeParameters/ExchangeParameters.tsx";
import useCurrencies from "./useCurrencies.ts";

const ExchangeRates = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amountToExchange, setAmountToExchange] = useState(1);

  const { currencyPairs, status, availableCurrencies } =
    useCurrencies(selectedCurrency);

  const handleNewAmountToExchange = useDebouncedCallback(
    (newAmountToExchange: number) => setAmountToExchange(newAmountToExchange),
    500,
  );

  const handleNewCurrencySelected = (newCurrency: string) =>
    setSelectedCurrency(newCurrency);

  if (currencyPairs === undefined) {
    throw Error("Failed to retrieve exchange rates!");
  }

  return (
    <>
      <ExchangeParameters
        onNewAmount={handleNewAmountToExchange}
        onNewCurrencySelected={handleNewCurrencySelected}
        availableCurrencies={availableCurrencies ?? []}
      ></ExchangeParameters>
      <ExchangeResultsTable
        results={currencyPairs}
        amountForExchange={amountToExchange}
        loadingStatus={status}
      ></ExchangeResultsTable>
    </>
  );
};

export default ExchangeRates;
