class LoginPage {
    init() {
        cy.visit("minha-conta/")
        cy.get('h1.page-title').should("have.text", "Minha conta")
    }

    registerForm(ebacUser) {
        cy.get('#reg_email').focus().clear().type(ebacUser.email)
        cy.get('#reg_password').focus().clear().type(ebacUser.password)
    }

    registerFormEnviar() {
        cy.get('input[value="Register"]').focus().click()

    }

    loginForm(ebacUser) {
        cy.get('#username').focus().clear().type(ebacUser.email)
        cy.get('#password').focus().clear().type(ebacUser.password)
    }

    loginFormEnviar() {
        cy.get('input[value="Login"]').focus().click()
    }

    validarLogin() {
        cy.get('.woocommerce-MyAccount-content > p:nth-child(3)').should("contain", "\n\tA partir do painel de controle de sua conta, você pode ver suas")
    }

    logoutForm() {
        cy.get('.woocommerce-MyAccount-navigation li:last-child a').focus().click()
    }
}

export default LoginPage;