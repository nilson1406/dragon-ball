/// <reference types="cypress" />

context('Shenlong Invation Test', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should not invocate Shenlong if dont have all dragon balls', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    cy.get('[data-testid="back"]').click()
  })
})
