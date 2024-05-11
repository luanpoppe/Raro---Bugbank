import { faker } from "@faker-js/faker"

export class PaginaLogin {
    usuarioCriado = {
        senha: faker.internet.password(6),
        nome: "teste" + faker.person.firstName(),
        email: faker.internet.email()
    }

    textoModal = "#modalText"
    olhoSenha = ".login__eye"

    inputEmailLogin() {
        return cy.get("[placeholder='Informe seu e-mail']").eq(0)
    }
    inputSenhaLogin() {
        return cy.get("[placeholder='Informe sua senha']").eq(0)
    }

    buttonRegistrar = ".ihdmxA"
    buttonAcessar = ".otUnI"

    buttonFecharModalCadastro = "#btnCloseModal"

    erroCampoObrigatorio = ".input__warging"

    toggleCriarContaSaldo = "#toggleAddBalance"

    inputEmailRegistrar() {
        return cy.get("[placeholder='Informe seu e-mail']").eq(1)
    }
    inputNomeRegistrar() {
        return cy.get("[placeholder='Informe seu Nome']")
    }

    inputSenhaRegistrar() {
        return cy.get("[placeholder='Informe sua senha']").eq(1)
    }
    inputConfirmarSenhaRegistrar() {
        return cy.get("[placeholder='Informe a confirmação da senha']")
    }

    buttonCadastrar = ".styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0"

    typeRegistrarEmail() {
        this.inputEmailRegistrar().type(this.usuarioCriado.email, {
            force: true
        })
    }
    typeRegistrarNome() {
        this.inputNomeRegistrar().type(this.usuarioCriado.nome, {
            force: true
        })
    }

    typeRegistrarSenha() {
        this.inputSenhaRegistrar().type(this.usuarioCriado.senha, {
            force: true
        })
    }
    typeRegistrarConfirmarSenha() {
        this.inputConfirmarSenhaRegistrar().type(this.usuarioCriado.senha, {
            force: true
        })
    }

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click({
            force: true
        })
    }

    criarUsuario() {
        this.typeRegistrarEmail()
        this.typeRegistrarNome()
        this.typeRegistrarSenha()
        this.typeRegistrarConfirmarSenha()

        cy.get(this.buttonCadastrar).click({
            force: true
        })

        return this.usuarioCriado
    }
}