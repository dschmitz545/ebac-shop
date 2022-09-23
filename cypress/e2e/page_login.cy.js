import LoginPage from '../pages/LoginPage';
import login_factory from '../factories/login_factory';

describe("Pagina de login", () => {

    let loginPage = new LoginPage()
    let ebacUser = login_factory.ebacUser();

    it("devo estar na pagina de login", () => {
        loginPage.init()
    })


    it("usuario deve se cadastrar", () => {

        loginPage.registerForm(ebacUser)
        loginPage.registerFormEnviar()
        loginPage.validarLogin()
        loginPage.logoutForm()
    })

    it("usuário deve se logar", () => {

        loginPage.loginForm(ebacUser)
        loginPage.loginFormEnviar()
        loginPage.validarLogin()
        loginPage.logoutForm()
    })
})