import { FormEvent } from "react";
import { Group, NumberInput } from "@mantine/core";
import CurrenciesSelection from "./CurrenciesSelection.tsx";

interface ExchangeParametersProps {
  onNewAmount: (newAmount: number) => void;
  onNewCurrencySelected: (newCurrency: string) => void;
  availableCurrencies: string[];
}

const ExchangeParameters = (props: ExchangeParametersProps) => {
  const handleNewAmount = (event: FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;

    if (inputValue === "") {
      props.onNewAmount(1);
      return;
    }

    props.onNewAmount(Number(inputValue));
  };

  return (
    <Group grow>
      <NumberInput
        rightSection={
          <CurrenciesSelection
            availableCurrencies={props.availableCurrencies}
            onNewCurrencySelected={props.onNewCurrencySelected}
          />
        }
        size="lg"
        style={{ width: "100%" }}
        rightSectionWidth="md"
        placeholder="1.00"
        name="amount"
        onInput={handleNewAmount}
        allowNegative={false}
      />
    </Group>
  );
};

export default ExchangeParameters;
