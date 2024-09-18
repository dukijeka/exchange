import { FormEvent } from "react";
import { Flex, NumberInput } from "@mantine/core";
import CurrenciesSelection from "./CurrenciesSelection.tsx";

interface ExchangeParametersProps {
  onNewAmount: (newAmount: number) => void;
  onNewCurrencySelected: (newCurrency: string) => void;
  availableCurrencies: string[];
}

const ExchangeParameters = (props: ExchangeParametersProps) => {
  const handleNewAmount = (event: FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value.replace(",", "");

    if (inputValue === "") {
      props.onNewAmount(0);
      return;
    }

    props.onNewAmount(Number(inputValue));
  };

  return (
    <Flex>
      <NumberInput
        hideControls
        size="lg"
        thousandSeparator=","
        style={{ width: "100%" }}
        rightSectionWidth="md"
        placeholder="0.00"
        name="amount"
        onInput={handleNewAmount}
        allowNegative={false}
      />
      <CurrenciesSelection
        availableCurrencies={props.availableCurrencies}
        onNewCurrencySelected={props.onNewCurrencySelected}
      />
    </Flex>
  );
};

export default ExchangeParameters;
