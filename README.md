![iconHogar](/assets/iconhogar.png)

# API - HOGAR
## 🚀 Descrição
API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).

Para visualizar a descrição completa do projeto, siga [API - HOGAR](/assets/apihogarCamila.pdf)

   >Os grupos de refugiados são compelidos a sair de seu país de origem devido a existência de conflitos, miséria e circunstâncias que ferem gravemente a ordem pública. Trata-se de um processo doloroso e forçado, e por isso procuram refúgio em outro país. Entendemos que ainda há carência de políticas públicas para acolher os refugiados ou solicitantes de refúgio, pois muitos vivem em situação de vulnerabilidade.Além disso, é comum não conseguirem crédito em bancos ou mesmo acesso a educação.
   >
   >Pensando nisso, acredito que o primeiro passo para oferecer o suporte necessário às pessoas nessa condição é realizar um mapeamento de seu perfil e de suas necessidades. Em um segundo momento, objetivamos auxiliar no desenvolvimento de uma rede de apoio entre os próprios refugiados, sociedade civil, e conectar pessoas às instituições que oferecem suporte adequado (ONGs, bancos que ofereçam crédito ou serviços, empresas e instituições públicas que ainda permanecem descentralizadas), buscando integrar esses elementos às políticas públicas.


# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Público-alvo](#publico-alvo)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Rodando o Back End](#rodando-o-back-end)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
   * [Agradecimentos](#agradecimentos)
<!--te-->

## ✅Objetivos

- Mapeamento do perfil e necessidades dos refugiados através de cadastros na API;
- Desenvolvimento de uma rede de apoio mútuo entre refugiados, sociedade civil, ONGs, empresas através de cadastros;
- Auxiliar no fomento de políticas públicas a partir dos dados obtidos;

## ✅Público-alvo
Agentes interessados em contribuir com a causa:
- Solicitantes de refúgio e refugiados.
- Voluntários.
- Instituições, Abrigos, ONGs: auxiliar o diálogo entre solicitantes, voluntários e prefeitura.
- Empresas: encontrar novos colaboradores.
- Bancos: auxiliar através de crédito para o estabelecimento de micro e pequeno empresário.
- Prefeituras: realizar o mapeamento dos refugiados e promover o diálogo entre solicitantes e instituições no geral.

## ✅Aprendizados

Para a execução do projeto final, desenvolvemos uma API fundamentada no modelo que utiliza quatro operações básicas, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). Dessa forma podemos trabalhar com as informações dispostas em um banco de dados NoSQL. Para acessar e tratar as operações, o código foi organizado em uma Arquitetura embasada no sistema Model View Controller (MVC).

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂 HOGARAPIFINAL
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |   **app.js**
                |
                📂---configs
                |   **dbconnect.js
                |
                📂---controller
                |       **blogController.js
                |       institutoController.js
                |       solicitanteController.js
                |       voluntarioController.js**
                |
                📂---model
                |       **blogSchema.js
                |       institutoSchema.js
                |       solicitanteSchema.js
                |       voluntarioSchema.js**
                |       
                |
                📂---routes
                |       **blogRoutes.js
                |       institutoRoutes.js
                |       solicitanteRoutes.js
                |       voluntarioRoutes.js**
                |__      teste.js**


Clique para visualizar o desenho da [Arquitetura](/assets/apihogararquitetura.png)


## ✅Instalação
* Para realizar download do projeto, siga as instruções:

### 🎲Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/camilapessoa/hogarapifinal.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd hogarapifinal

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:33 - acesse <http://localhost:33>
# Mongo conectado em mongodb://localhost:27017/apihogar
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

Para acessar via Heroku, acesse o [link da API](https://api-hogar.herokuapp.com/)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [x] [JavaScript](https://www.javascript.com/)
- [x] [Git/Github](https://github.com/)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [MongoDb](https://www.mongodb.com/)
- [x] [Mongoose](https://mongoosejs.com/)
- [x] [Nodemon](https://nodemon.io/)
- [x] [Express](https://expressjs.com/pt-br/)
- [x] [dotenv](https://www.npmjs.com/package/dotenv)
- [x] [cors](https://www.npmjs.com/package/cors)
- [x] [heroku](https://dashboard.heroku.com/apps)

### 🎲Features

Funcionalidades da aplicação

- [x] Cadastros - POST
- [x] Postagem no blog - POST
- [x] Apagar - DELETE
- [x] Busca - GET
- [x] Busca por ID - GET
- [x] Update em todos os campos - PUT
- [x] Update em campo específico - PATCH

### 🎲Rotas

* local: http://localhost:33

* MongoDB: [mongodb://localhost:27017/apihogar]()

* Heroku: https://api-hogar.herokuapp.com/


| Métodos|  Endpoint     | Descrição          |   Observações  |
| -------| ---------     | ---------          | -------------- |
| GET |  "/"             |Retorna teste com apresentação |{API - HOGAR http://localhost:33}|
| GET |  "/solicitantes/"|Retorna todos os dados do banco de dados  |
| GET |  "/instituto/"   |Retorna todos os institutos               |
| GET |  "/blog/ "   | Retorna todas as postagens|                            |
| GET |  "/voluntario/"  |Retorna todos os voluntários|
| GET | "**/nome/[NOME]" | Retorna cadastro por nome específico|
|POST | "/**/criar" | Cria novo cadastro ou postagem | Retorna mensagem
| DELETE | "/**/del/[ID]" | Deleta cadastro por id|
|DELETE | "/blog/deletar/[ID]" | Deleta postagem por id|
| PATCH| "/**/campo/[ID]" | Atualiza campo selecionado do cadastro ou postagem por ID | 
| PATCH | "/solicitantes/campo/[ID]" | Atualiza somente o campo "celular" e "endereçoatual" do cadastro do solicitante por id |
| PUT | "/**/atualizar/[ID]" | Atualiza completamente cadastro | Retorna mensagem amigável (id não pode ser modificado)

<!--
#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:33 }
- [x] "/" 

#### Retorna todos os dados do banco de dados
- [x] "/solicitantes/" 
- [x] "/instituto/" 
- [x] "/blog/ "
- [x] "/voluntario/"

#### Cria novo cadastro ou postagem e retorna mensagem amigável
- [x] "/**/criar" 

#### Retorna cadastro por nome específico
- [x] "**/nome/[NOME]" 

#### Deleta cadastro ou postagem por id específico e retorna mensagem amigável
- [x] "/**/del/[ID]" 
- [x] "/blog/deletar/[ID]" 


#### Atualiza somente o campo escolhido do cadastro ou postagem por id específico e retorna mensagem amigável
- [x] "/**/campo/[ID]" 


#### Atualiza somente o campo "celular" e "endereçoatual" do cadastro do solicitante por id específico e retorna mensagem amigável
- [x] "/solicitantes/campo/[ID]" 

#### Atualiza completamente cadastro e retorna mensagem amigável (id não pode ser modificado)
- [x] "/**/atualizar/[ID]"
-->

[![Badge](https://img.shields.io/badge/heroku-deploy-green)](https://api-hogar.herokuapp.com/) ![Badge](https://img.shields.io/github/forks/camilapessoa/hogarapifinal) ![Badge](https://img.shields.io/github/issues/camilapessoa/hogarapifinal) ![Badge](https://img.shields.io/github/stars/camilapessoa/hogarapifinal)

## ✅Modelo com campos obrigatórios para teste

### 🎲 Solicitantes

    {
            "nome":"Maria" ,
            "dataNascimento": "09/10/1988",
            "localOrigem": "Venezuela",
            "dataChegada": "08/08/2020",
            "enderecoAtual": "Abrigo Gentil",
            "celular": "Nao tem",
            "ocupacao": "domestica",
            "formacao": "fundamental",
            "idioma": ["espanhol", "portugues"]
    }

#### 🎲 Instituições
    {
            "nomeRazao": "ACNUR",
            "CNPJ": "07.100754 / 0001/62 4",
            "endereco": "Av. Tavares Bastos, 352 - Souza, Belém - PA, 66615-005",
            "responsavelDireto": "Nacoes Unidas",
            "servico": "voluntariado",
            "telefone": "(91) 3073 5700",
            "email": "brabrhr@unhcr.org"      
    }

### 🎲 Blog

    {
                "title": "Doações de brinquedos",
                "subject": "Doações",
                "content": "Doações para crianças carentes, entre em contato conosco através de abrigonovolar@org.com",
                "tags": ["voluntario", "abrigo"]
    }

### 🎲 Voluntários

    {
                "nome": "Paula",
                "voluntariado": ["aulas de português", "aulas de culinária"],
                "dataNascimento": "10/03/1992",
                "endereco": "São Braz, 168",
                "celular": "(91) 89536999"
    }

### 🚧 Projeto em Construção

        Autenticação
        Sistema de Login
        Relação entre Schemas
        Fórum
        Front End

Conheça a [Agência da ONU para Refugiados](https://help.unhcr.org/brazil/#_ga=2.186131113.1648763200.1607413216-2053606720.1606725861)

# Agradecimentos

O caminho para se tornar Dev é árduo e certamente preciso agradecer imensamente a diversas pessoas que me auxiliaram nesse início de jornada.
Em primeiro à minha filha, que é o lugar de onde resgato as forças necessárias para continuar. Aos meus pais e irmãs pelo suporte e amor de tamanho incomensurável (eu não conseguiria sem vocês). Ao meu grande amor, JP, que me deu o presente mais belo.

A rede de apoio constituída na {Reprograma} é gigantesca, aprendi que nossa força é infinita e que podemos conquistar qualquer coisa juntas. A vivência com essas mulheres foi de um aprendizado Inesquecível e que vou levar para toda minha vida.

Obrigada Ceci, Jô, Ju, todas as professoras e monitoras (cada palavra de estímulo e dicas foram essenciais). E obrigada, logicamente, às mulheres incríveis da On6-XP, eu não poderia desejar melhor turma, vocês são incrivelmente INSPIRADORAS!!!