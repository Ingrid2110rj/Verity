/// <reference types="cypress" />

describe('cenário 02 - Teste contatos', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Verificar se os títulos: Culture e Tech; e Nossas soluções_ estão visíveis na home page em português', () => {
        cy.get('#comp-kevyodnk6label').click()
        cy.get('#input_comp-kwz6tqej').type(usuario.nome)
        cy.get('#input_comp-kwz6tqf7').type('ingridferreira2110@gmail.com')
        cy.get('#input_comp-kwz6tqfe').type('21975612544')
        cy.get('#textarea_comp-kwz6tqfr').type('Ser aprovador na vaga de analista de teste')
        cy.get('[data-testid="input"]').click()
        cy.get('[data-testid="buttonElement"]').click()


       
      })
    })
  
  
    

  
