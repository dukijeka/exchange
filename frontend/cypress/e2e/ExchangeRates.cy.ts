describe("Exchange Rates", () => {
  it("renders the home page correctly", () => {
    cy.visit("/");
    cy.contains("Enter the amount to check the rates");
  });

  it("renders the exchange rates when the amount in entered", () => {
    cy.visit("/");

    cy.get("[data-testid='amountToExchangeInput']").type("3");

    cy.get("[data-testid='exchangeResultsLoadingSkeleton']").should("exist");

    cy.get("[data-testid='exchangeAmountForBAT']").then((BATValue) => {
      const batValueFloat = parseFloat(BATValue.text());
      console.log(batValueFloat);
      expect(batValueFloat).to.be.gte(0);
    });
  });
});
