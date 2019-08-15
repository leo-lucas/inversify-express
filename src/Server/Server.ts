import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { Request, Response, Application } from 'express'

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

  public static clientErrorHandler (app: Application) {
    app.use((err:Error, req:Request, res:Response, next:Function) => {
      console.log(err.message)
      if (err) { res.status(500).json({ error: err.message }) }
    })
  }
}
export default Server
