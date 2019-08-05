import {
  controller, httpGet, BaseHttpController, queryParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'
import { Response } from 'express'

@controller('/teste01')
export class TestController extends BaseHttpController implements ITestController {
  @httpGet('/')
  public async get () {
    return this.json('teste1')
  }

  @httpGet('/url2')
  public async test (@queryParam('start') start: number) {
    return this.httpContext.response.send(start)
  }
}

export interface ITestController{
  get() : Promise<JsonResult>
  test(start: number) : Promise<Response>
}
