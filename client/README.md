## *Star Wars App*

## Overview

Esta aplicação é responsável pela criação da interface de usuário buscando os dados no servidor para renderizá-los 


## Features

-   Listagem e paginação de filmes, planetas, personagens e naves
-   Permite que o usuário busque um filme específico através de barra de pesquisa


## Frameworks e Ferramentas

-   React.js: Biblioteca frontend para criação de UIs - open source
-   Vite: Ferramenta para contrução otimizada de frontend 
-   Axios: Client que permite realizar requisições HTTP
-   React DOM: Pacote que fornece métodos de DOM
-   React Router DOM: Pacote para criação de rotas e transição de páginas em uma aplicação do tipo SPA


## Hand's on
### Running Locally

1. No terminal, acesse a pasta client dentro do projeto clonado 
```bash
cd client
```
2. Instale as dependências
```bash
npm install
```
3. Copie os exemplos de variável de ambiente para um arquivo .env 
```bash
cp .env.example .env
```
4. Configure a variável de base url com <(IPV4 da sua máquina)>:<(porta em que o servidor que será acessado está rodando)>
**OBS**: Caso não saiba o endereço de sua máquina ou IP esteja dinâmico, realize o comando para buscar o valor
```bash
ipconfig
```
5. Rode o comando para startar a aplicação
```bash
npm run dev
```
