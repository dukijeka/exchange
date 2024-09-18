import { Select } from "@mantine/core";

interface CurrenciesSelectionProps {
  availableCurrencies: string[];
  onNewCurrencySelected: (selectedCurrency: string) => void;
}

const CurrenciesSelection = (props: CurrenciesSelectionProps) => {
  const handleNewCurrency = (newCurrency: string | null) => {
    props.onNewCurrencySelected(newCurrency ?? "USD");
  };

  return (
    <Select
      data={props.availableCurrencies}
      defaultValue="USD"
      allowDeselect={false}
      size="lg"
      onChange={handleNewCurrency}
      inputSize="xl"
      searchable
    />
  );
};

export default CurrenciesSelection;
