import {
  controller,
  httpGet,
  BaseHttpController,
  queryParam

} from 'inversify-express-utils'
import { IResourceOperacao } from '@Port/IResourceOperacao'
import { inject } from 'inversify'
import { IOperacao } from '@Port/IOperacao'
import { TypeOperacoes } from '../Core/TypeOperacoes'

@controller('/')
export class ResourceOperacao extends BaseHttpController
  implements IResourceOperacao {
  public constructor (@inject('Operacao') private operacao: IOperacao) {
    super()
  }

  @httpGet('/')
  public async calc (@queryParam('val1') operador1:string, @queryParam('val2') operador2:string, @queryParam('ope') operando:TypeOperacoes) {
    this.statusCode(200)
    return this.operacao.calc(Number(operador1), Number(operador2), operando)
  }
}
