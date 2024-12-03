describe("Checking the correct functioning of the buttons on the home page TC006", () =>{
    it("Women click TC006.1",() => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('a[title="Women"]').click();
        cy.url().should("include","/index.php?id_category=3&controller=category")
    })
    it("Dresses click TC006.2",() => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
        cy.url().should("include","/index.php?id_category=8&controller=category")
    })
    it("T-Shirts click TC006.3",() => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('.sf-menu > :nth-child(3) > a').click();
        cy.url().should("include","/index.php?id_category=5&controller=category")
    })
    it("T-Shirts click TC006.4",() => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('.sf-menu > :nth-child(4) > a').click();
    })
    
})