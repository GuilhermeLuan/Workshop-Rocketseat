// user o express para criar e configurar meu servidor
const express = require('express')
const server = express()

// criei uma rota '/'
// e capturo o pedido do cliente para responder

server.get("/", function(req, res) {
    return res.send("Resposta do servidor")
})

// liquei meu servidor na porta 3000
server.listen(3000)