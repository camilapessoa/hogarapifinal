const express = require('express')
const app = express()
const cors = require('cors')
const db = require("./configs/dbconnect")
const bodyParser = require('body-parser')

db.connect() //inserir caminho do bd - ativar o banco, conectar do repositorio

app.use(cors())//
app.use(express.json())
app.use(bodyParser.json())


//usar rotas

const teste = require("./routes/teste") //testar servidor
//chama solicitante
const solicitanteRoute = require("./routes/solicitanteRoutes")

//chama instituto
const institutoRoute = require("./routes/institutoRoutes")

//chama blog
const blogRoute = require("./routes/blogRoutes")

//chama voluntário
const voluntarioRoute = require("./routes/voluntarioRoutes")

//teste
app.use("/", teste) 

//solicitante
app.use("/solicitantes", solicitanteRoute) 

//institutos
app.use("/instituto", institutoRoute)

//blog
app.use("/blog", blogRoute)

//voluntario
app.use("/voluntario", voluntarioRoute)



module.exports = app 