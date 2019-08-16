import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import express, { Request, Response, Application } from 'express'

import * as swagger from 'swagger-express-ts'

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
      this.applaySwagger(app)
    })
  }

  private applaySwagger (app:Application) {
    app.use('/api-docs/swagger', express.static('swagger'))
    app.use(
      '/api-docs/swagger/assets',
      express.static('node_modules/swagger-ui-dist')
    )

    app.use(swagger.express(
      {
        definition: {
          info: {
            title: 'Api calculadora',
            version: '0.1.0'
          },
          externalDocs: {
            url: '/sw'
          }
          // Models can be defined here
        }
      }
    ))
  }
  public static clientErrorHandler (app: Application) {
    app.use((err:Error, req:Request, res:Response, next:Function) => {
      console.log(err.message)
      if (err) { res.status(500).json({ error: err.message }) }
    })
  }
}
export default Server
