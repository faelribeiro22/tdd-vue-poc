describe('Add a new task', () => {
  it('Save task in the list', () => {
    cy.visit('http://localhost:8081');

    cy.get("[data-input='titleText']")
      .type('New Task');
  });
});
