/// <reference types="cypress" />

describe('react app test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('says React on page', () => {
    cy.contains('React')
  })

  it('can add a handful of records', () => {
    cy.get('[id="name"]').type('Rich')
    cy.get('[id="job"').type('Tester')
    cy.contains('Submit').click()

    cy.get('[id="name"]').type('Rich')
    cy.get('[id="job"').type('Tester')
    cy.contains('Submit').click()

    cy.get('[id="name"]').type('Rich')
    cy.get('[id="job"').type('Tester')
    cy.contains('Submit').click()
  })

  it('can delete a record', () => {
    cy.contains('Delete').click()
  })

})
