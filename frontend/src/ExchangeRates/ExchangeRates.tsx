import ExchangeParameters from "./ExchangeParameters/ExchangeParameters.tsx";
import ExchangeResultsTable from "./ExchangeResultsTable/ExchangeResultsTable.tsx";
import { useState } from "react";
import useCurrencies from "./useCurrencies.ts";

const ExchangeRates = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const { currencyPairs, status, availableCurrencies } =
    useCurrencies(selectedCurrency);

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (currencyPairs === undefined) {
    throw Error("Failed to retrieve exchange rates!");
  }

  return (
    <>
      <ExchangeParameters></ExchangeParameters>
      <ExchangeResultsTable results={currencyPairs}></ExchangeResultsTable>
    </>
  );
};

export default ExchangeRates;
