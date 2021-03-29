describe('Test Suite-Sign Up', () => {
    const url = "https://my.wallbox.com/login",

    // Selectors
          registerModal = ".is-margin-bottom-32 ",             
          button = "[data-test-id=registerBtnModal]",
          classError = ".error",
          validationMessage = "Campo obligatorio"; 

   

  it('Register user', () => {
    let email = "random" + Math.round(Math.random(1.1000)*100) + "@gmail.com";

    cy.visit(url)
    cy.url().should('include', '/login')   
    //open model

    cy.get(registerModal).click() // Click on button
    
    //finish sign up
    cy.get(button).click();
    
    cy.get(classError).first()
    .should("have.text", validationMessage);    
    
  })   

})