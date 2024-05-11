# language: pt

Funcionalidade: Cadastro de Usuário

    Contexto:
        Dado que acessei a tela de cadastro

    # Cenario: Deve exibir a mensagem de erro nos campos de Nome, Email, Senha e Confirmação de senha quando não preenchê-los
    #     Quando não preencher os campos obrigatórios
    #     E acessar a função cadastrar
    #     Então os campos obrigatórios devem exibir a mensagem de erro "É campo obrigatório"

    # Cenario: Deve exibir a mensagem de erro ao tentar realizar um cadastro sem preencher o campo nome
    #     Quando preencher todos os campos obrigatórios exceto o campo de nome
    #     E acessar a função cadastrar
    #     Então deve exibir a mensagem "Nome não pode ser vazio"

    # Cenario: Deve exibir a mensagem "Email não pode ser vazio" ao tentar realizar um cadastro sem preencher o campo email
    #     Quando preencher todos os campos obrigatórios exceto o campo de email
    #     E acessar a função cadastrar
    #     Então deve exibir a mensagem "Email não pode ser vazio"

    # Cenario: Deve exibir a mensagem "Senha não pode ser vazio" ao tentar realizar um cadastro sem preencher o campo senha
    #     Quando preencher todos os campos obrigatórios exceto o campo de senha
    #     E acessar a função cadastrar
    #     Então deve exibir a mensagem "Senha não pode ser vazio"


    # Cenario: Deve exibir a mensagem  "Confirmar senha não pode ser vazio" ao tentar realizar um cadastro sem preencher o campo senha
    #     Quando preencher todos os campos obrigatórios exceto o campo de confirmar senha
    #     E acessar a função cadastrar
    #     Então deve exibir a mensagem "Senha não pode ser vazio"

    Cenario: Deve ser possível ativar a opção "Criar conta com saldo" e criar uma conta com saldo de R$ 1.000,00
        Quando cadastrar usuário com a opção de criar conta com saldo
        Então o usuário deve ser cadastrado com sucesso
        E deverá conter o saldo de "1.000,00" reais na conta

    Cenario: Deve ser possivel criar uma conta com saldo de R$ 00,00 ao deixar inativa a opção "Criar conta com saldo"
        Quando cadastrar usuário sem a opção de criar conta com saldo
        Então o usuário deve ser cadastrado com sucesso
        deverá conter o saldo de "00,00" reais na conta

    Cenario: Deve ser possível criar uma conta com Senha e confirmação de senha iguais
        Quando tentar criar conta com o mesmo valor nos campos de seha e confirmação de senha
        Então usuário deve ser criado com sucesso

#  Cenario: Ao cadastrar uma conta com sucesso deve exibir o alerta com o número da conta criada
#  Quando
#  Então



