describe('Test Suite-Sign Up', () => {
  const url = "https://my.wallbox.com/login",

  // Selectors
        registerModal = ".is-margin-bottom-32 ",
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
        spanError = ".error",     
        validationMessage = "Ya hay un usuario registrado con esta dirección de correo.",

  //Data      
        name = "Johona",
        lastname = "Doe",         
        password ="Test1234",
        email = "marinatouceda79@gmail.com";        

it('Register user', () => {  

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
  cy.get(button).click();
  
  //Get error for user already registered
  cy.get(spanError)
    .should("have.text", validationMessage);
  
})   

})