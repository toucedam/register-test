Cypress.Commands.add('login', (username, password) => {
    const inputLogin = "#login-email",
          inputPassword = "#login-password";
  
      cy.get(inputLogin).type(username)
      cy.get(inputPassword).type(password)
      cy.get(buttonLogin).click()
    });
    
Cypress.Commands.add('generateUser',()=> {
    return 'random' + Math.round(Math.random(1.1000)*100) + '@gmail.com'; 
   })
    
Cypress.Commands.add('opensite',()=> {
cy.visit(Cy.env(url))
})   
   