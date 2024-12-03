const {
    getRandomEmail,
  } = require('../support/randomData.js');
  
  describe("Recovery Password function TC004", () =>{
    it("Recovering a password with a valid email TC004.1", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get('.lost_password > a').click();
        cy.get('#email').type("dominikbernas@gmail.com");
        cy.get('.submit > .btn > span').click();
        cy.get('.alert').should("be.visible").and("contain", "A confirmation email has been sent to your address: Dominikbernas@gmail.com")
    })
    it("Recovering a password with a invalid email TC004.2", () =>{
        const mail = getRandomEmail();
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get('.lost_password > a').click();
        cy.get('#email').type(mail);
        cy.get('.submit > .btn > span').click();
        cy.get(".alert.alert-danger").should("be.visible").and("contain","There is no account registered for this email address.")
    })
})