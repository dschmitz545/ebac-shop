describe("Pagina de login", () => {
    it("devo estar na pagina de login", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('h1.page-title').should("have.text", "Minha conta")
    })

    let ebacUser = {
        name: "nogoceli",
        email: "nogoceli@ucomponent.com",
        password: "?AbacatePera?"

    }

    it("usuario deve se cadastrar", () =>{
        cy.get('#reg_email').type(ebacUser.email)
        cy.get('#reg_password').type(ebacUser.password)
        cy.get('input[value="Register"]').click()
              
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("have.text", `\n\tOlá, ${ebacUser.name} (não é ${ebacUser.name}? Sair)`)

        cy.get('li[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"] a').click()

    })

    it("usuário deve se logar", () =>{
        cy.get('#username').type(ebacUser.email)
        cy.get('#password').type(ebacUser.password)
        cy.get('input[value="Login"]').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("have.text", `\n\tOlá, ${ebacUser.name} (não é ${ebacUser.name}? Sair)`)

        cy.get('li[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"] a').click()
    })

})