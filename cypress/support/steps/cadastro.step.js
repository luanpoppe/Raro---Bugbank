import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { PaginaLogin } from "../pages/pagina-inicial.page"

const paginaLogin = new PaginaLogin()
let user

Given('que acessei a tela de cadastro', function () {
    cy.visit("/")
    cy.get(paginaLogin.buttonRegistrar).click()
})

When('não preencher os campos obrigatórios', function () {

})

When('acessar a função cadastrar', function () {
    paginaLogin.clickButtonCadastrar()
})

When('preencher todos os campos obrigatórios exceto o campo de nome', function () {
    paginaLogin.typeRegistrarEmail()
    paginaLogin.typeRegistrarSenha()
    paginaLogin.typeRegistrarConfirmarSenha()
})

When('preencher todos os campos obrigatórios exceto o campo de email', function () {
    paginaLogin.typeRegistrarNome()
    paginaLogin.typeRegistrarSenha()
    paginaLogin.typeRegistrarConfirmarSenha()
})

When('preencher todos os campos obrigatórios exceto o campo de senha', function () {
    paginaLogin.typeRegistrarNome()
    paginaLogin.typeRegistrarEmail()
    paginaLogin.typeRegistrarConfirmarSenha()
})

When('preencher todos os campos obrigatórios exceto o campo de confirmar senha', function () {
    paginaLogin.typeRegistrarNome()
    paginaLogin.typeRegistrarEmail()
    paginaLogin.typeRegistrarSenha()
})

When('cadastrar usuário com a opção de criar conta com saldo', function () {
    cy.get(paginaLogin.toggleCriarContaSaldo).click({
        force: true
    })
    user = paginaLogin.criarUsuario()
})

Then('os campos obrigatórios devem exibir a mensagem de erro {string}', function (mensagem) {
    cy.get(paginaLogin.erroCampoObrigatorio).eq(2).should("exist")
    cy.get(paginaLogin.erroCampoObrigatorio).eq(2).should("contain.text", mensagem)


    cy.get(paginaLogin.erroCampoObrigatorio).eq(4).should("exist")
    cy.get(paginaLogin.erroCampoObrigatorio).eq(4).should("contain.text", mensagem)

    cy.get(paginaLogin.erroCampoObrigatorio).eq(5).should("exist")
    cy.get(paginaLogin.erroCampoObrigatorio).eq(5).should("contain.text", mensagem)

    cy.get(paginaLogin.erroCampoObrigatorio).eq(3).should("be.visible")
    cy.get(paginaLogin.erroCampoObrigatorio).eq(3).should("contain.text", mensagem)
})

Then('deve exibir a mensagem {string}', function (mensagem) {
    cy.contains(mensagem).should("be.visible")
})

Then('o usuário deve ser cadastrado com sucesso', function () {
    cy.contains("foi criada com sucesso").should("be.visible")
})

Then('deverá conter o saldo de {string} reais na conta', function (valor) {
    cy.get(paginaLogin.buttonFecharModalCadastro).click()

    paginaLogin.inputEmailLogin().type(user.email)
    paginaLogin.inputSenhaLogin().type(user.senha)

    cy.get(paginaLogin.buttonAcessar).click()

    cy.contains("Saldo em conta R$ " + valor).should("be.visible")
})