/// <reference types="cypress" />

// describe('Mobile phone replenishment', () => {
//     Context('text descirbe', () => {
//     })
//     it('Check min sum', () => {
//         //some test
//     })
// }) 

// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// });

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/as")
//     cy.get('.DocSearch DocSearch-Button')
// });

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
//     cy.get('nav')
// });

// it('By Different Types', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// }); 


// Comment
it.only('Using Get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('div').find('nav').find('ul').find('li').find('a').eq(0)
});
