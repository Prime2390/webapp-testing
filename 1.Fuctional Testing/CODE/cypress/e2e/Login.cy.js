const {
    getRandomEmail,
    getRandomPassword,
  } = require('../support/randomData.js');

describe("The user login on account - TC002", () =>{
    it("The user logs in with the correct data - TC002.1", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email").type("dominikbernas@gazeta.pl");
        cy.get("#passwd").type("Szedok2390")
        cy.get("#SubmitLogin").click();
        cy.get(".info-account").should("be.visible").and("contain","Welcome to your account. Here you can manage all of your personal information and orders.")
    })
    it("When the user only enters an email - TC002.2 ", () =>{
        const email = getRandomEmail();
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email").type(email);
        cy.get("#SubmitLogin").click();
        cy.get(".alert.alert-danger").should("be.visible").and("contain","Password is required.")

    })
    it("When the user enters the wrong e-mail TC002.3", () =>{
        const email = getRandomEmail();
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email").type(email);
        cy.get("#passwd").type("Szedok2390")
        cy.get("#SubmitLogin").click();
        cy.get(".alert.alert-danger").should("be.visible").and("contain","Authentication failed.")

    })
    it("When a user enters the wrong password TC002.4", () =>{
        const passwd = getRandomPassword();
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email").type("dominikbernas@gazeta.pl");
        cy.get("#passwd").type(passwd);
        cy.get("#SubmitLogin").click();
        cy.get(".alert.alert-danger").should("be.visible").and("contain","Authentication failed.")

    })
})