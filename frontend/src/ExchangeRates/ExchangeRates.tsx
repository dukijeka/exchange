import { useState } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import ExchangeResultsTable from "./ExchangeResultsTable/ExchangeResultsTable.tsx";
import ExchangeParameters from "./ExchangeParameters/ExchangeParameters.tsx";
import useCurrencies from "./useCurrencies.ts";
import { Containerimpl, Text } from "@mantine/core";

const ExchangeRates = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amountToExchange, setAmountToExchange] = useState(0);

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
    <Container mx="0" w="100vw">
      <ExchangeParameters
        onNewAmount={handleNewAmountToExchange}
        onNewCurrencySelected={handleNewCurrencySelected}
        availableCurrencies={availableCurrencies}
      ></ExchangeParameters>
      {amountToExchange === 0 ? (
        <Container w="100vw" h="90vw" mt="md">
          <Text>Enter the amount to check the rates</Text>
        </Container>
      ) : (
        <ExchangeResultsTable
          results={currencyPairs}
          amountForExchange={amountToExchange}
          loadingStatus={status}
        ></ExchangeResultsTable>
      )}
    </Container>
  );
};

export default ExchangeRates;
