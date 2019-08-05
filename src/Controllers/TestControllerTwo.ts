import * as express from 'express'
import { interfaces, controller, httpGet, queryParam } from 'inversify-express-utils'
// import { injectable, inject } from 'inversify'

@controller('/foo')
export class TestControllerTwo implements interfaces.Controller {
  @httpGet('/')
  private index (req: express.Request, res: express.Response, next: express.NextFunction): string {
    return 'this.fooService.get(req.query.id)'
  }

  @httpGet('/')
  private list (@queryParam('start') start: number, @queryParam('count') count: number): string {
    return 'this.fooService.get(start, count)'
  }
}
