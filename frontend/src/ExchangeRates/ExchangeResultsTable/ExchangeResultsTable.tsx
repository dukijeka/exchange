import { useEffect } from "react";
import { Card, Container, Grid, Group, Text } from "@mantine/core";
import CurrencyPair from "../CurrencyPair.ts";

interface ExchangeResultsTableProps {
  results: CurrencyPair[];
}

const ExchangeResultsTable = (props: ExchangeResultsTableProps) => {
  useEffect(() => {
    console.log(props.results);
  }, []);

  return (
    <Container my="md">
      <Grid>
        {props.results.map((result) => (
          <Grid.Col span={6}>
            <Card withBorder key={result.targetCurrency} mt={"sm"}>
              <Group justify="space-between" mt="md" mb="xs">
                <Text>{result.exchangeRate.toFixed(3)}</Text>
                <Text>{result.targetCurrency}</Text>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ExchangeResultsTable;
