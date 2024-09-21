import { render } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

function renderTestComponent(node: ReactElement) {
  return render(
    <MantineProvider>
      <QueryClientProvider client={queryClient}>{node}</QueryClientProvider>
    </MantineProvider>,
  );
}

export default renderTestComponent;
