describe('Add a new task', () => {
  it('Save task in the list', () => {
    cy.visit('http://localhost:8082');

    cy.get("[data-test='titleText']")
      .type('New Task');
  });
});
