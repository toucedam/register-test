describe('Test Suite-Sign Up', () => {
    const url = "https://branch-qa-challenge.holded.dev/signup",
          inputName = data-test-id=signup-name",
          inputPhone = data-test-id=signup-phone",
          inputEmail = data-test-id=signup-email",
          inputPassword =data-test-id=signup-password",          
          button = data-test-id=button-signup",
          name = "Johona Doe",
          phone = "123456789",
          emailRegistered = "marinatouceda79@gmail.com",
          
          password ="Test1234";

  it('Register user', () => {
    let email = "random" + Math.round(Math.random(1.1000)*100) + "@gmail.com";

    cy.visit(url)
    cy.url().should('include', '/signup')   
    //user
    cy.get(inputName)
    .type(name)
    .should("have.value", name);      

    cy.get(inputPhone)
    .type(phone)
    .should("have.value", phone);

    cy.get(inputEmail)
    .type(email)
    .should("have.value", email);

    cy.get(inputPassword)
    .type(password)
    .should("have.value", password);

    //Captcha
    cy.solveGoogleReCAPTCHA();    
    cy.get('[type="checkbox"]').check();

    //finish sign up
    cy.get(button).click();
    
  })   

})