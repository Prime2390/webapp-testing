describe("The user login on account - TC003", () =>{
    it("The user logs in with the correct data - TC003.1", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php?id_category=7&controller=category");
        cy.get(".login").click();
        cy.get("#email").type("dominikbernas@gazeta.pl");
        cy.get("#passwd").type("Szedok2390")
        cy.get("#SubmitLogin").click();
        cy.get(".info-account").should("be.visible").and("contain","Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.get(".logout").click();
        cy.url().should('include', '/index.php?controller=authentication&back=my-account');

    })
})