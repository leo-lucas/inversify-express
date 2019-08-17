import 'reflect-metadata'
import Server from './Server/Server'
import container from './Server/container'

let app = new Server(container)

app.setErrorConfig(Server.clientErrorHandler)

app.build().listen(3000, function() {
  console.log('Servidor rodando na porta 3000')
})
