// npm i --save-dev nodemon
const express = require("express")
const app = express()
const port = 3000

const technologies = [
  {
    id: "html5",
    name: "HTML5",
    description:
      "A mais recente versão da linguagem de marcação utilizada para estruturar e exibir conteúdo na web.",
  },
  {
    id: "css3",
    name: "CSS3",
    icon:" <SiCss3 />",
    description:
      "Versão mais recente do CSS, que é usado para estilizar a apresentação de documentos HTML e XML.",
  },
  {
    id: "javascript",
    name: "Javascript",
    icon: "<SiJavascript />",
    description:
      "Linguagem de programação popular que é usada principalmente para criar páginas web interativas.",
  },
  {
    id: "python",
    name: "Python",
    icon: "<SiPython />",
    description:
      "Linguagem de programação interpretada, de alto nível e com diversas aplicações.",
  },
  {
    id: "node",
    name: "Node",
    icon: "<SiNodedotjs />",
    description:
      "Ambiente de execução de código JavaScript, permitindo o desenvolvimento de aplicações",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "<SiMysql />",
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    id: "react",
    name: "React",
    icon: "<SiReact />",
    description:
      "React é uma biblioteca de JavaScript para criar interfaces de usuário.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: "<SiSass />",
    description:
      "Sass é uma linguagem de script que é usada para gerar arquivos CSS mais eficientes e fáceis de gerenciar.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "<SiNextdotjs />",
    description:
      "Estrutura de desenvolvimento web de código aberto que permite criar aplicativos da web com React.",
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: "<SiTypescript />",
    description:
      "TypeScript é uma linguagem de programação de código aberto que é uma superset do JavaScript.",
  },
  {
    id: "mongodb",
    name: "Mongodb",
    icon: "<SiMongodb />",
    description:
      "MongoDB é um banco de dados de código aberto baseado em documentos e não relacional.",
  },
  {
    id: "wordpress",
    name: "Wordpress",
    icon:" <SiWordpress />",
    description:
      "É um sistema de gerenciamento de conteúdo (CMS) de código aberto usado para criar sites e blogs.",
  },
];

app.get('/', (req, res) => {
  res.send(technologies)
})

app.listen(port, ()=>{
  console.log(`Rodando na porta: ${port}`);
})