import {
  controller,
  httpGet,
  BaseHttpController,
  queryParam,
  requestParam

} from 'inversify-express-utils'
import { IResourceOperacao } from '@Port/IResourceOperacao'
import { multiInject } from 'inversify'
import { IOperacao } from '@Port/IOperacao'
import { getType, operacoes } from '../Ports/Core/TypeOperacoes'

@controller('/api')
export class ResourceOperacao extends BaseHttpController
  implements IResourceOperacao {
  public constructor (@multiInject('Operacao') private operacoes: IOperacao[]) {
    super()
  }

  @httpGet('/:operador')
  public async calc (@requestParam('operador') operando: operacoes, @queryParam('val1') operador1: string, @queryParam('val2') operador2: string) {
    this.validateOperacao(operando)
    return this.json({ valor: this.operacoes[getType(operando)].calcular(Number(operador1), Number(operador2)) })
  }

  public validateOperacao (operando:operacoes):boolean {
    if ([ 'div',
      'mul',
      'som',
      'sub'].includes(operando)) return true
    throw Error('Operador invalido')
  }
}
