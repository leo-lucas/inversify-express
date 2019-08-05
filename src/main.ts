import 'reflect-metadata'
import Server from './Server/Server'
import container from './Server/container'

let app = new Server(container).build()
app.listen(3000)
