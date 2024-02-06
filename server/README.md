## *Star Wars API Consumer*

## Overview

Esta Aplicação é responsável por retornar dados ordenados da franquia de Star Wars acessando as rotas da [SWAPI](https://swapi.dev/).


## Features

-   Busca e listagem de personagens ordenada alfabeticamente
-   Busca e listagem de planetas ordenados pelo valor do diâmetro
-   Busca e listagem de naves ordenadas alfabeticamente
-   Busca e listagem de filmes ordenadas cronológicamente
-   Armazena histórico de busca de filmes


## Frameworks e Ferramentas

-   Node.js: Ambiente de execução javascript server-side open source
-   Express.js: Framework para criação de servidores web usando Node
-   Mongoose: Biblioteca de modelagem de dados para MongoDB no Node
-   Request: Biblioteca para chamadas HTTP
-   Swagger: Conjunto de ferramentas para documentação de APIs
-   Dotenv: Pacote de gerenciamento de variáveis de ambiente


## Hand's on
### Running Locally

1. No terminal, acesse a pasta server dentro do projeto clonado 
```bash
cd server
```
2. Instale as dependências
```bash
npm install
```
3. Copie os exemplos de variável de ambiente para um arquivo .env e configure-as adicionando os valores referentes
```bash
cp .env.example .env
```
4. Rode o comando para startar o servidor e aguarde o console de Server running para iniciar a utilização do servidor
```bash
npm run dev
```
5. Acesse documentação swagger pela URL: http://(host):(port)/docs

## Artifacts

-   Linguagem predominante de desenvolvimento Javascript;
-   Banco de dados MongoDB.