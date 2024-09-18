import { Grid } from "@mantine/core";
import CurrencyPair from "../CurrencyPair.ts";
import { QueryStatus } from "@tanstack/react-query";
import ExchangeResultsTableLoadingSkeleton from "./ExchangeResultsTableLoadingSkeleton.tsx";

import ExchangeResultsTableItem from "./ExchangeResultsTableItem.tsx";

interface ExchangeResultsTableProps {
  amountForExchange: number;
  results: CurrencyPair[];
  loadingStatus: QueryStatus;
}

const ExchangeResultsTable = (props: ExchangeResultsTableProps) => {
  if (props.loadingStatus === "pending") {
    return <ExchangeResultsTableLoadingSkeleton />;
  }

  return (
    <>
      <Grid>
        {props.results?.map((result) => (
          <ExchangeResultsTableItem
            key={result.targetCurrency}
            amountForExchange={props.amountForExchange}
            currencyPair={result}
          />
        ))}
      </Grid>
    </>
  );
};

export default ExchangeResultsTable;
