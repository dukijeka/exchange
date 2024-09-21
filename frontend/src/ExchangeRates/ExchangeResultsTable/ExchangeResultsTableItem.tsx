import { Card, Container, Grid, Group, Image, Text } from "@mantine/core";
import CurrencyPair from "../model/CurrencyPair.ts";

interface ExchangeResultsTableItemProps {
  amountForExchange: number;
  currencyPair: CurrencyPair;
}

const ExchangeResultsTableItem = (props: ExchangeResultsTableItemProps) => {
  return (
    <Grid.Col span={6}>
      <Card withBorder mt={"sm"}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text
            data-testid={`exchangeAmountFor${props.currencyPair.targetCurrency}`}
          >
            {(
              props.amountForExchange * props.currencyPair.exchangeRate
            ).toFixed(3)}
          </Text>
          <Group mr="xl">
            <Image
              src={`/currencyIcons/${props.currencyPair.targetCurrency}.png`}
              fallbackSrc="/currencyIcons/XAU.png"
              alt={props.currencyPair.targetCurrency}
            />
            <Container w="md">
              <Text>{props.currencyPair.targetCurrency}</Text>
            </Container>
          </Group>
        </Group>
      </Card>
    </Grid.Col>
  );
};

export default ExchangeResultsTableItem;
