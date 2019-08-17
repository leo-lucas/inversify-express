// import { JsonResult } from 'inversify-express-utils/dts/results'
// import { Response } from 'express'
import { operacoes } from '../Core/TypeOperacoes'
import { JsonResult } from 'inversify-express-utils/dts/results'
export interface IResourceOperacao {
  calc(
    operador1: string,
    operador2: string,
    operando: operacoes,
  ): Promise<JsonResult>
}
