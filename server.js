// user o express para criar e configurar meu servidor
const express = require('express')
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias saepe quia. ",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias saepe quia. ",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias saepe quia. ",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias saepe quia. ",
        url: "https://rocketseat.com.br"
    },
]

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjuncks
const nunjuncks = require('nunjucks')
nunjuncks.configure('views', {
    express: server,
    noCache: true,
})


// criei uma rota '/'
// e capturo o pedido do cliente para responder

server.get("/", function(req, res) {

    let lastIdeas = []
    for(let idea of ideas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    lastIdeas = lastIdeas.reverse()

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
})


// liquei meu servidor na porta 3000
server.listen(3000)
