/// <reference types="cypress" />

describe('react app test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('says React on page', () => {
    cy.contains('React')
  })

  it('is running locally', ()=> {
    // totally a bad test. only works locally
    cy.url().should('include', 'localhost:3000')
  })

})
