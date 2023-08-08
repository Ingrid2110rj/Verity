/// <reference types="cypress" />

describe('cenário 01 - verity home page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  })

 it('Verificar se os títulos: Nossos clientes; e Nossas soluções_ estão visíveis', () => {
    cy.contains('Nossas soluções_').should('be.visible')
    cy.contains('Nossos clientes_').should('be.visible')
    
  })


  
})

