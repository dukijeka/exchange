import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./App.css";
import ExchangeRates from "./ExchangeRates/ExchangeRates.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <ExchangeRates></ExchangeRates>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
