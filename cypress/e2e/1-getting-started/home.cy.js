/// <reference types="cypress" />

describe('cenário 01 - verity home page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Verificar se os títulos: Culture e Tech; e Nossas soluções_ estão visíveis na home page em português', () => {
    cy.contains('Nossas soluções_').should('be.visible')
    cy.contains('Nossos clientes_').should('be.visible')
    
  })


  
})

