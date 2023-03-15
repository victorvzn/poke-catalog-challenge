describe('Poké catalog', () => {
  it('Poké catalog app should work as expected', () => {
    cy.visit('http://localhost:3000/')

    // Heading

    cy.contains('Poké Catalog')

    // Wait

    cy.wait(2000)

    // Filter by name

    cy.get('.pokemon-results').contains('Showing 151 results')

    cy.get('input[placeholder="Pokemon Name"]').type('geo')

    cy.get('.pokemons .pokemon').should('have.length', 3)

    cy.get('.pokemons .pokemon .pokemon__name').first().should('have.text', 'pidgeotto')

    cy.get('.pokemon-results').contains('Showing 03 results')

    // Filter by type

    cy.get('select[name="type"]').select('rock')
    cy.get('select').select('rock').should('have.value', '6')

    cy.get('.pokemon-results').contains('Showing 01 results')

    cy.get('.pokemons .pokemon .pokemon__name').first().should('have.text', 'geodude')

    // Make favorite

    cy.get('.pokemon__favorite').click()

    cy.get('.pokemon__favorite[data-testid="is-favorite"')

    // Clean search

    cy.get('input[placeholder="Pokemon Name"]').clear()
    cy.get('select').select('Select a type')

    cy.get('.pokemon-results').contains('Showing 151 results')

    // Change view

    cy.get('.pokemon-views__buttons > :nth-child(2)').click()
    cy.get('.pokemon.is-collapsable').should('have.length', 151)

    cy.get('.pokemon-views__buttons > :nth-child(1)').click()
    cy.get('.pokemon').should('have.length', 151)

    // Change Theme

    cy.get('.header-buttons > :nth-child(2)').click()
    cy.get('body').should('have.class', 'light')

    cy.get('.header-buttons > :nth-child(1)').click()
    cy.get('body').should('have.class', 'dark')

    cy.get('.header-buttons > :nth-child(2)').click()
    cy.get('body').should('have.class', 'light')
    // Success E2E
  })
})
