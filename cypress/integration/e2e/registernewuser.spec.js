describe('Test Suite-Sign Up', () => {
    const url = "https://my.wallbox.com/login",

    // Selectors
          registerModal = "[data-test-id=registerBtn]",
          inputName = "[data-test-id=nameInputModal]",
          inputLastname ="[data-test-id=surnameInputModal]",        
          inputEmail = "[data-test-id=emailInputModal]",
          inputConfirmEmail ="[data-test-id=confirmEmailInputModal]",
          inputPassword = "[data-test-id=passwordInputModal]", 
          inputConfirmPassword = "[data-test-id=confirmPasswordInputModal]",
          selectCountry = "[data-test-id=countrySelectModal]",
          checkboxTerms = "[data-test-id=privacyCheckboxModal]",
          marketingCheckbox = "[data-test-id=marketingCheckboxModal]",     
          button = "[data-test-id=registerBtnModal]",
          confirmModal = "[data-test-id =confirmBtnModal]",
          textComfirm = '.has-text-primary',
          messageConfirm = "Thank you!",

    //Data      
          name = "Johona",
          lastname = "Doe",         
          password ="Test1234",
          country = "Spain";

  it('Register new user', () => {
    let email = "random" + Math.round(Math.random(1.1000)*100) + "@gmail.com";

    cy.visit(url)
    cy.url().should('include', '/login')   
    //open model

    cy.get(registerModal).click() // Click on button
    

    cy.get(inputName)
    .type(name)
    .should("have.value", name);      

    cy.get(inputLastname)
    .type(lastname)
    .should("have.value", lastname);

    cy.get(inputEmail)
    .type(email)
    .should("have.value", email);

    cy.get(inputConfirmEmail)
    .type(email)
    .should("have.value", email);

    cy.get(inputPassword)
    .type(password)
    .should("have.value", password);

    cy.get(inputConfirmPassword)
    .type(password)
    .should("have.value", password);

    cy.get(selectCountry).click().type('{downarrow}{enter}')
    
   // Checkboxes

    cy.get('[type="checkbox"]').check({force: true})


    //finish sign up
    cy.wait(1000);
    cy.get(button).click();

    //Confirm modal success
    cy.get(confirmModal)
    .should('be.visible')
    
    cy.get(textComfirm)
    .should("have.text", messageConfirm);
    
  })   

})