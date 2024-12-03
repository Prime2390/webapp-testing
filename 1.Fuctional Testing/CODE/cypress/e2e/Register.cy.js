const {
    getRandomFirstName,
    getRandomLastName,
    getRandomEmail,
    getRandomPassword,
    getRandomDay,
    getRandomMonth,
    getRandomNumber,
  } = require('../support/randomData.js');
  

describe("User Registration - TC001", () =>{
    it("should register a new user with valid data TC001,1", () =>{
     const firstName = getRandomFirstName();
    const lastName = getRandomLastName();
    const email = getRandomEmail();
    const password = getRandomPassword();
    const day = getRandomDay();
    const month = getRandomMonth();
    const year = getRandomNumber();

        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email_create").type(email);
        cy.get("#SubmitCreate").click();

        cy.get("#id_gender1").check();
        cy.get("#customer_firstname").type(firstName);
        cy.get("#customer_lastname").type(lastName);
        cy.get("#passwd").type(password);
        cy.get("#days").select(day);
        cy.get("#months").select(month);
        cy.get("#years").select(year);
        cy.get("#submitAccount").click();
        cy.get(".alert.alert-success").should("be.visible").and('contain', 'Your account has been created.')
    })
    it("Checking whether multiple accounts can be set up for one email TC001.2", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email_create").type("testuser@example.com");
        cy.get("#SubmitCreate").click();
        cy.get("#create_account_error").should("be.visible").and("contain", "An account using this email address has already been registered. Please enter a valid password or request a new one. ")
    })
})
