<h1 align="center">Controle de Usuários</h1>
Aplicação de controle de usuários (API em Node.js + FrontEnd em Vue.js)

## :white_check_mark: Features

- [X] Adicionar usuário
- [X] Listar usuários
- [X] Editar usuário
- [X] Deletar usuário
- [X] Fazer Login
- [ ] Fazer Logout (Em construção...)
- [ ] Recuperar senha do usuário (Em construção...)


## :clipboard: Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[GIT](https://git-scm.com/), [Node.js](https://nodejs.org/en/), [Wamp Server](https://sourceforge.net/projects/wampserver/).  
Além disto, é bom ter um editor para trabalhar com código como [VSCode](https://code.visualstudio.com/) e um SGBD como [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## :computer: Rodando a aplicação

### Criando o banco de dados com as tabelas

```bash
# Clone este repositório
$ git clone https://github.com/RafaelRani/Controle-de-Usuarios-APIeFrontEnd.git

# Abra o 'apiusers_users.sql' no MySQL Workbench e execute o arquivo

# Abra o 'apiusers_passwordtokens.sql' no MySQL Workbench e execute o arquivo
```

### Rodando o Backend

```bash
# Acesse a pasta da API no terminal/cmd
$ cd Controle-de-Usuarios-APIeFrontEnd/UserAPI

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ nodemon index.js
```

### Rodando o FrontEnd

```bash
# Acesse a pasta do FrontEnd no terminal/cmd
$ cd Controle-de-Usuarios-APIeFrontEnd/FrontEnd

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm run serve

# O servidor iniciará na porta:8080 - acesse: <http://localhost:8080>
```

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:  
:heavy_check_mark: Node.js  
:heavy_check_mark: Vue.js  
:heavy_check_mark: MySQL  
:heavy_check_mark: Javascript   
:heavy_check_mark: Bulma (Framework CSS)  
  
Made with :purple_heart: Rafael Rani :wave: [Get in touch!](https://www.linkedin.com/in/rafaelrani/)
