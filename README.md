<h1 align="center">Ignite - Shop</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.6-blue" 
    alt="React Ver. ^18.2.0"
  />
   <img 
    src="https://img.shields.io/badge/NextJS-%5E13.3.4-black" 
    alt="NextJS Ver. ^13.3.4"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 5.0.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2023-green" 
    alt="Ignite-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/ignite-n-shop?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/ignite-n-shop?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/ignite-n-shop?color=4DA1CD 'Languages') &nbsp;
  
</div>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

<div align="center">
  <img src=".github/project-preview.gif?style=flat" >
</div> 
 

<br>

## 💻 Projeto
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nesse projeto é abordado os fundamentos de **Next.js** utilizando **Stitches** para estilização e **Stripe** como API de loja e pagamentos.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Stripe](https://stripe.com/br)
 

## 🚀 Como executar

**Observação**
Para rodar esse projeto será necessário:

-  Ter uma conta do Stripe e colocar as chaves em um arquivo .env.local na raiz do projeto (crie o arquivo).
-  Também será necessário criar uma loja e adicionar alguns produtos para aparecer na aplicação.

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-n-shop.git

$ cd ignite-n-shop
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- Ao rodar a aplicação, aparecerá o endereço de acesso no terminal.
 
## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Criando o projeto e suas dependências </h3>

```bash
  # Criando o projeto com NextJS
  npx create-next-app@latest

  ✔ What is your project named? … ignite-n-shop
  ✔ Would you like to use TypeScript with this project? … No / Yes
  ✔ Would you like to use ESLint with this project? … No / Yes
  ✔ Would you like to use Tailwind CSS with this project? … No / Yes
  ✔ Would you like to use `src/` directory with this project? … No / Yes
  ✔ Would you like to use experimental `app/` directory with this project? … No / Yes
  ✔ What import alias would you like configured? … @/*

  ➜ npm install @stitches/react

  ➜ npm install keen-slider

  ➜ npm install stripe

  ➜ npm install axios
 
```   
<br />

<h3>Adicionar fonts no NextJS</h3>

Para adicionar as fontes precisa ser no arquivo _document (nesse projeto => src/pages/_document.tsx)
Obs: esse arquivo é literalmente o substituto do index.html que se usa no React puro.

<div align="center">
  <img src=".github/font-import.png?style=flat" alt="Cover" width="1290px" height="502px">
</div> 
 
---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)