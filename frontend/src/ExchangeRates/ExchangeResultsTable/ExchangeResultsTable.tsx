import { Card, Grid, Group, Text } from "@mantine/core";
import CurrencyPair from "../CurrencyPair.ts";
import { QueryStatus } from "@tanstack/react-query";

interface ExchangeResultsTableProps {
  amountForExchange: number;
  results: CurrencyPair[];
  loadingStatus: QueryStatus;
}

const ExchangeResultsTable = (props: ExchangeResultsTableProps) => {
  if (props.loadingStatus === "pending") {
    return <span>Loading...</span>;
  }

  return (
    <Grid>
      {props.results.map((result) => (
        <Grid.Col key={result.targetCurrency} span={6}>
          <Card withBorder mt={"sm"}>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>
                {(props.amountForExchange * result.exchangeRate).toFixed(3)}
              </Text>
              <Text>{result.targetCurrency}</Text>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ExchangeResultsTable;
