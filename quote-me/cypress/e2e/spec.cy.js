describe('Page Load Flows', () => {
  beforeEach(() => {
    cy.intercept('https://weary-liquid.surge.sh/', {
      method: 'GET',
      fixture: '../fixtures/quote.json'
    })
    cy.visit('http://localhost:3000')
  })
  it("Should have a header", () => {
    cy.get('.header').should('be.visible')
  })
  it('Should display a quote card on page load', () => {
    cy.get('.card').should('be.visible')
  })
  it('pulls data from a fixture', () => {
    cy.fixture('quote').then((data) => {
      cy.log(data.author)
    })
  })
  it('Should navigate to the search page', () => {
    cy.get('.links-container').within(() => {
      cy.get('.')
    })
  })
  
  })

