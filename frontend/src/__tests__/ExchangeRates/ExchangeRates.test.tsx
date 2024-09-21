import { vi, beforeEach, expect, test } from "vitest";
import ExchangeRates from "../../ExchangeRates/ExchangeRates.tsx";
import renderTestComponent from "../helpers/renderTestComponent.tsx";
import userEvent from "@testing-library/user-event";
import mockExchangeRates from "./mockExchangeRates.ts";

beforeEach(() => {
  fetch.mockResponse(JSON.stringify(mockExchangeRates));

  vi.mock("@mantine/hooks", () => ({
    useDebouncedCallback: vi.fn((callback) => {
      return (...args: never[]) => callback(...args);
    }),
  }));
});

test("shows empty placeholder when the amount is empty", async () => {
  const exchangeRates = renderTestComponent(<ExchangeRates />);
  const emptyListPlaceholder = await exchangeRates.findByText(
    "Enter the amount to check the rates",
  );
  const exchangeResultsTable = await exchangeRates.queryByTestId(
    "exchangeResultsTable",
  );

  expect(emptyListPlaceholder).toBeDefined();
  expect(exchangeResultsTable).toBeNull();
});

test("shows a currency table when the amount is entered", async () => {
  const user = userEvent.setup();

  const exchangeRates = renderTestComponent(<ExchangeRates />);

  const amountInput = await exchangeRates.findByTestId("amountToExchangeInput");

  await user.type(amountInput, "1");

  const emptyListPlaceholder = await exchangeRates.queryByText(
    "Enter the amount to check the rates",
  );

  const exchangeResultsTable = await exchangeRates.queryByTestId(
    "exchangeResultsTable",
  );

  expect(emptyListPlaceholder).toBeNull();
  expect(exchangeResultsTable).toBeDefined();
});

test("correctly calculates exchange rates", async () => {
  const user = userEvent.setup();

  const exchangeRates = renderTestComponent(<ExchangeRates />);

  const amountInput = await exchangeRates.findByTestId("amountToExchangeInput");

  await user.type(amountInput, "2");

  const eurExchangeRate = await exchangeRates.queryByTestId(
    "exchangeAmountForEUR",
  );

  expect(eurExchangeRate?.textContent).toEqual("1.790");
});
