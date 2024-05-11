import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { PaginaLogin } from "../pages/pagina-inicial.page"

const paginaLogin = new PaginaLogin()
let user

Given('que acessei a tela de login e possuo uma conta válida', function () {
    cy.visit("/")
    cy.get(paginaLogin.buttonRegistrar).click()
    user = paginaLogin.criarUsuario()
    cy.get(paginaLogin.buttonFecharModalCadastro).click()
})

Given('que acessei a tela de login e não possuo uma conta', function () {
    cy.visit("/")
})

When('preencher o campo email', function () {
    paginaLogin.inputEmailLogin().type(user.email)
})

When('preencher os campos obrigatórios', function () {
    paginaLogin.inputEmailLogin().type(user.email)
    paginaLogin.inputSenhaLogin().type(user.senha)
})

When('preencher o campo senha', function () {
    paginaLogin.inputSenhaLogin().type(user.senha)
})

When('clicar no botão acessar', function () {
    cy.get(paginaLogin.buttonAcessar).click()
})

When('preencher os campos email e senha', function () {
    paginaLogin.inputEmailLogin().type(user.email)
    paginaLogin.inputSenhaLogin().type(user.senha)
})

When('não preencher o campo email', function () {

})

When('não preencher o campo senha', function () {

})

When('preencher o campo email com um email invalido {string}', function (email) {
    paginaLogin.inputEmailLogin().type(email)
})

When('preencher o campo senha com uma senha invalida {string}', function (senha) {
    paginaLogin.inputSenhaLogin().type(senha)
})

When('preencher o campo email com um email não cadastrado {string}', function (email) {
    paginaLogin.inputEmailLogin().type(email)
})

When('preencher o campo senha com a senha {string}', function (senha) {
    paginaLogin.inputSenhaLogin().type(senha)
})

When('informar o email invalido {string}', function (emailInvalido) {
    paginaLogin.inputEmailLogin().type(emailInvalido)
})

When('acessar a função do botão de visualizar conteúdo da senha', function () {
    cy.get(paginaLogin.olhoSenha).click()
})

Then('exibirá a mensagem "Olá nomeDoUsuário"', function () {
    cy.contains("Olá " + user.nome).should("exist")
})

Then('o site direcionará para pagina home', function () {
    cy.location("pathname").should("equal", "/home")
})

Then('o site deve retornar a mensagem {string}', function (texto) {

    // cy.contains(texto).should("exist")
    // cy.get("#modalText").should("contain", texto)
    // cy.get("#modalText").invoke("text")
    cy.get(paginaLogin.textoModal).then(function (valor) {
        cy.log('valor.text(): ', valor.text())
        expect(valor.text()).to.equal("Usuário ou senha inválido.\nTente novamente ou verifique suas informações!")
    })
})

Then('o sistema exibe a mensagem de erro {string}', function (mensagem) {
    cy.contains(mensagem).should("exist")
})

Then('devo conseguir visualizar o texto da senha', function () {
    paginaLogin.inputSenhaLogin().should('have.attr', 'type', 'text')
})