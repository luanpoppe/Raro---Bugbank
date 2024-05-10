# language: pt

Funcionalidade: Login de Usuário

  Cenario: Ao efetuar o login com email e senha válidos o usuário deve ser redirecionado para a página de home
    Dado que acessei a tela de login e possuo uma conta válida
    Quando preencher os campos obrigatórios
    E clicar no botão acessar
    Então o site direcionará para pagina home
    E exibirá a mensagem "Olá nomeDoUsuário"


  Cenario: Não deve ser possível logar sem preencher o campo de email
    Dado que acessei a tela de login e possuo uma conta válida
    Quando não preencher o campo email
    E preencher o campo senha
    E clicar no botão acessar
    Então o site deve retornar a mensagem "Usuário e senha precisam ser preenchidos"

  Cenario: Não deve ser possível logar sem preencher o campo de senha
  Dado que acessei a tela de login e possuo uma conta válida
  Quando preencher o campo email
  E não preencher o campo senha
  E clicar no botão acessar
  Então o site deve retornar a mensagem "Usuário e senha precisam ser preenchidos"

  Cenario: Não deve ser possível logar com email invalido
  Dado que acessei a tela de login e possuo uma conta válida
  Quando preencher o campo email com um email invalido "emailErrado@gmail.com"
  E preencher o campo senha
  E clicar no botão acessar
  Então o site deve retornar a mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"

  Cenario: Não deve ser possível logar com senha invalida
  Dado que acessei a tela de login e possuo uma conta válida
  Quando preencher o campo email
  E preencher o campo senha com uma senha invalida "senha"
  E clicar no botão acessar
  Então o site deve retornar a mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"

  # # erro a ser descoberto
  Cenario: Não deve ser possível logar com email não cadastrado
  Dado que acessei a tela de login e não possuo uma conta
  Quando preencher o campo email com um email não cadastrado "abc123@gmail.com"
  E preencher o campo senha com a senha "senha"
  E clicar no botão acessar
  Então o site deve retornar a mensagem "Usuário ou senha inválido.Tente novamente ou verifique suas informações!"

  Esquema do Cenário: Deve exibir uma mensagem de erro ao preencher o campo email com um formato invalido
  Dado que acessei a tela de login e possuo uma conta válida
  Quando informar o email invalido "<email>"
  Então o sistema exibe a mensagem de erro "Formato inválido"
  Exemplos:
    | email |
    | @     | 
    | .com  |
    | @.com |
    | .     | 
    | .@    |
    | email |

  # Cenário: Deve ser possível visualizar o texto do campo senha
  #   Dado que acessei a tela de login e possuo uma conta válida
  #   Quando preencher os campos obrigatórios
  #   E acessar a função do botão de visualizar conteúdo da senha
  #   Então devo conseguir visualizar o texto da senha