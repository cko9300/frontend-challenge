describe("customer feedback page", () => {
  it("should update latest feedback on form submission", () => {
    cy.fill({ name: "cat", email: "cat@cat.com", rating: 2, comment: "Hello" });
    cy.contains("Submit feedback").click();
    cy.get('[data-testid="comments-container"]').within(() => {
      cy.get("h3").should("have.text", "cat");
      cy.get('[data-cy="comment"]').should("have.text", "Hello");
      cy.get("title").should((stars) => {
        expect(stars).to.have.length(2);
      });
    });
  });

  it("should update graph on form submission", () => {
    cy.fill({ name: "cat", email: "cat@cat.com", rating: 2, comment: "Hello" });
    cy.contains("Submit feedback").click();
    cy.get('[data-testid="graph-container"]').within(() => {
      cy.get(".recharts-bar path").should("be.visible");
    });
  });
});
