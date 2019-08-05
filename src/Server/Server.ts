import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// let server = new InversifyExpressServer(container)
// server.setConfig((app) => {
//   // add body parser
//   app.use(bodyParser.urlencoded({
//     extended: true
//   }))
//   app.use(bodyParser.json())
// })
class Server extends InversifyExpressServer {
  public constructor (container: Container) {
    super(container)
    this.setConfig((app) => {
      // add body parser
      app.use(bodyParser.urlencoded({
        extended: true
      }))
      app.use(bodyParser.json())
      app.use(morgan('dev'))
    })
  }
}
export default Server
