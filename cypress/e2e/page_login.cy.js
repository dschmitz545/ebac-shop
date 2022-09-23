import LoginPage from '../pages/LoginPage';
import login_factory from '../factories/login_factory';

describe("Estando na rota minha-conta", () => {

    let loginPage = new LoginPage()
    let ebacUser = login_factory.ebacUser();

    before(function () {
        loginPage.init()
    })

    afterEach(function () {
        loginPage.validarLogin()
        loginPage.logoutForm()
    })


    it("usuario deve se cadastrar", () => {

        loginPage.registerForm(ebacUser)
        loginPage.registerFormEnviar()
    })

    it("usuário deve se logar", () => {

        loginPage.loginForm(ebacUser)
        loginPage.loginFormEnviar()
    })
})