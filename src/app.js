//importar as configurações fo servidor
const {app,port} = require('../server')

//rotas
const index = require('./routes/index')(app)
const sobre = require('./routes/sobre')(app)



//escuta do servidor
//app.listen(3000)
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})