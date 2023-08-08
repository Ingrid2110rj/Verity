/// <reference types="cypress" />

describe('cenário 02 - Teste contatos', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
   it('Realizar cadastro', () => {
        cy.get('#comp-kevyodnk6label').click()
        cy.get('#input_comp-kwz6tqej').type('Ingrid Ferreira dos santos')
        cy.get('#input_comp-kwz6tqf7').type('ingridferreira2110@gmail.com')
        cy.get('#input_comp-kwz6tqfe').type('21975612545')
        cy.get('#textarea_comp-kwz6tqfr').type('Teste vaga QA')
        cy.get('[data-testid="input"]').click()
        cy.get('[data-testid="buttonElement"]').click()


       
      })
    })
  
  
    

  
