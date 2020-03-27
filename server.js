// user o express para criar e configurar meu servidor
const express = require('express')
const server = express()

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// criei uma rota '/'
// e capturo o pedido do cliente para responder

server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res) {
    return res.sendFile(__dirname + "/ideias.html")
})


// liquei meu servidor na porta 3000
server.listen(3000)
