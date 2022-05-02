/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('habit dashboard', () => {
  beforeEach(() => {
    cy.visit('/habits');
  });

  it('should display modal when add button is clicked', () => {
    cy.contains('button#habit-add-btn', 'Add').click();
    cy.contains('Add a new habit').should('be.visible');
  });

  it('should display habit card when new habit is added', () => {
    cy.get('#habit-add-btn').click();
    cy.contains('button', 'Save Changes').should('be.disabled');
    cy.get("input[placeholder='Habit']").type('Drink a cup of water');

    cy.contains('button', 'Save Changes').should('not.be.disabled');
    cy.contains('button', 'Save Changes').click();
    cy.contains('Drink a cup of water')
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container');
  });

  it('should toggle icon when habit card is clicked', () => {
    const input = 'Drink a cup of water';
    cy.get('#habit-add-btn').click();
    cy.get("input[placeholder='Habit']").type(input);
    cy.contains('button', 'Save Changes').click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible');
    cy.contains(input).click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible');
  });
});
