/// <reference types="cypress" />
  
  describe('external api calls', () => {

    it('calls the real api', () => {
      cy.request('https://jsonplaceholder.cypress.io/comments')
      .should((response) => {
      expect(response.status).to.eq(200)
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      })
  })

  it('calls runtime', () => { 
    cy.request({
        method: 'POST',
        url: 'https://gateway.int.compliancesystems.cloud/master/api/gateway/startwithjson', 
        headers: {
          'content-type': 'application/json',
          'partner': 'Misc',
          'operation': 'CallRuntime',
        },
        body: {}
    })
    .then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('body')
        cy.log('---> ' + JSON.stringify(response.body.operations[0].messages[0].value))  
        cy.visit(response.body.operations[0].messages[0].value);
        cy.contains('Show All Tabs', {timeout: 20000}).click()
        cy.url().should('include', '/Session/Lending')
        cy.get('.elemMissing').click();
    }) 
  })
  
})
  