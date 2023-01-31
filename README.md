<h1 style="color: #FFD700" align="center">IGNEWS</h1>

# Introdução

[IGNEWS](https://github.com/marciovz/ignews/) é um blog de visualização de conteúdo que requer uma inscrição e pagamento para ter acesso ao conteúdo postado.

O Acesso ao conteúdo é feito através do login por meio do [Github](https://github.com/).
A inscrição e pagamento é feita através da plataforma [Stripe](https://stripe.com/), e as informações dos registros do usuário são armazenados no banco de dados [Faunadb](https://fauna.com/).

O conteúdo é gerenciado através da plataforma do [Prismic](https://prismic.io/).

Este projeto é uma implementação da trilha Ignite ReactJs versão 2021 do curso Ignite da Rocketseat para aplicação dos conhecimentos sobre NextJS.

<div align="center">
  <img src="https://raw.githubusercontent.com/marciovz/ignews/main/assets/ignews-home.png" width="600" alt="Ignews home" />
</div>

## 1 - Requisitos

- Node.js versão 16
- NPM versao 8
- Nextjs
- Conta [Github](https://github.com/)
- Conta [Faunadb](https://fauna.com/)
- Conta [Stripe](https://stripe.com/)
- Conta [Prismic](https://prismic.io/)

## 2 - Tecnologias

- ReactJS
- NestJS
- Typescript
- SASS
- Eslint
- Axios
- GitHub
- Faunadb
- Stripe
- Prismic

## 2 - Instalação

Faça o clone deste repositório em sua máquina local.
Abra o terminal na pasta rais do projeto e rode o comando para instalação dos pacotes de dependência.

```shell
  # Intalando as dependências do projeto
  yarn install
```

Crie o arquivo <strong>env.local</strong> na raiz do projeto e configure as chaves solicitadas

```
# STRIPE
STRIPE_API_KEY= ---digite aqui sua api key do stripe---
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= ---digite aqui sua public key do stripe---
STRIPE_WEBHOOK_SECRET= ---digite aqui um Secret---
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# GITHUB
GITHUB_CLIENT_ID= ---digite aqui o seu client Id do github---
GITHUB_CLIENT_SECRET= ---digite aqui o seu secret do github---


# FAUNADB
FAUNADB_KEY= ---digite aqui sua chave de acesso para o faunadb---


# Prismic CMS
PRISMIC_ENDPOINT= ---digite aqui seu endpoit do prismic---
PRISMIC_ACCESS_TOKEN= ---digite aqui seu Token de acesso ao prismic---

```

## 3 - Rodando a aplicação

```shell
  # Rodando o projeto
  $ yarn dev
```

## 4 - Visualizando a aplicação

Abra um navegador e digite o endereço que onde está rodando o servidor next.

```
  http://localhost:3000/
```

<div align="center" >
    <img src="https://raw.githubusercontent.com/marciovz/ignews/main/assets/ignews-home.png" width="300" alt="Ignews home" style="margin-right: 30px" />
    <img display="inline" src="https://raw.githubusercontent.com/marciovz/ignews/main/assets/ignews-home.png" width="300" alt="Ignews home" />
</div>

## 5 - Melhorias
