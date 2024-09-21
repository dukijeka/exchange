import { Card, Grid, Group, Skeleton, Text } from "@mantine/core";

const dummyArray = [...Array(50).keys()];

const ExchangeResultsTableLoadingSkeleton = () => {
  return (
    <Grid mt="md" data-testid="exchangeResultsLoadingSkeleton">
      {dummyArray.map((dummyArrayElement) => (
        <Grid.Col span={6} key={dummyArrayElement}>
          <Skeleton visible={true}>
            <Card withBorder mt={"sm"}>
              <Group justify="space-between" mt="md" mb="xs">
                <Text>Amount</Text>
                <Text>EUR</Text>
              </Group>
            </Card>
          </Skeleton>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ExchangeResultsTableLoadingSkeleton;
