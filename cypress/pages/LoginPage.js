class LoginPage {
    init() {
        cy.visit("minha-conta/")
        cy.get('h1.page-title').should("have.text", "Minha conta")
    }

    registerForm(ebacUser) {
        cy.get('#reg_email').type(ebacUser.email)
        cy.get('#reg_password').type(ebacUser.password)
    }

    registerFormEnviar() {
        cy.get('input[value="Register"]').click()

    }

    loginForm(ebacUser) {
        cy.get('#username').type(ebacUser.email)
        cy.get('#password').type(ebacUser.password)
    }

    loginFormEnviar() {
        cy.get('input[value="Login"]').click()
    }

    validarLogin() {
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should("contain", "\n\tA partir do painel de controle de sua conta, você pode ver suas")
    }

    logoutForm() {
        cy.get('li[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"] a').click()
    }
}

export default LoginPage;