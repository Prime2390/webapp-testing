describe("Contact Form - TC005", () =>{
    it("The user enters all data correctly - TC005.1", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#contact-link").click();
        cy.get('#id_contact').select("Webmaster");
        cy.get('#email').type("dominikbernas@gazeta.pl")
        cy.get('#id_order').type("Dress")
        cy.get('#message').type("the dress is too small and does not look like the picture")
        cy.get('#submitMessage > span').click();
        cy.get('.alert').should("be.visible").and("contain","Your message has been successfully sent to our team.")
    })
    it("user did not provide an email - TC005.2", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#contact-link").click();
        cy.get('#id_contact').select("Webmaster");
        cy.get('#id_order').type("Dress")
        cy.get('#message').type("the dress is too small and does not look like the picture")
        cy.get('#submitMessage > span').click();
        cy.get('.alert').should("be.visible").and("contain","Invalid email address.")
    })
    it("user did not specify message - TC005.3", () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#contact-link").click();
        cy.get('#id_contact').select("Webmaster");
        cy.get('#id_order').type("Dress")
        cy.get('#email').type("dominikbernas@gazeta.pl")
        cy.get('#submitMessage > span').click();
        cy.get('.alert').should("be.visible").and("contain","The message cannot be blank.")
    })
})