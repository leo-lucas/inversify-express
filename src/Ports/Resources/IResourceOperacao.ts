// import { JsonResult } from 'inversify-express-utils/dts/results'
// import { Response } from 'express'
import { TypeOperacoes } from '../../Core/TypeOperacoes'
export interface IResourceOperacao {
  calc(operador1:string, operador2:string, operando:TypeOperacoes): Promise<number>
}
