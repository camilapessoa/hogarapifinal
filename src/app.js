const express = require('express')
const app = express()
const cors = require('cors')
const db = require("./configs/dbconnect")

db.connect() //inserir caminho do bd - ativar o banco, conectar do repositorio

app.use(cors())//
app.use(express.json())



//usar rotas

const teste = require("./routes/teste") //testar servidor
const solicitanteRoute = require("./routes/solicitanteRoutes")


app.use("/", teste) //chama teste
app.use("/solicitantes", solicitanteRoute) //solicitante


module.exports = app 