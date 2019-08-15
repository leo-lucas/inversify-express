import {
  controller,
  httpGet,
  BaseHttpController,
  queryParam

} from 'inversify-express-utils'
import { IResourceOperacao } from '@Port/IResourceOperacao'
import { multiInject } from 'inversify'
import { IOperacao } from '@Port/IOperacao'
import { getType, operacoes } from '../Ports/Core/TypeOperacoes'

@controller('/')
export class ResourceOperacao extends BaseHttpController
  implements IResourceOperacao {
  public constructor (@multiInject('Operacao') private operacoes: IOperacao[]) {
    super()
  }

  @httpGet('/')
  public async calc (@queryParam('val1') operador1:string, @queryParam('val2') operador2:string, @queryParam('ope') operando:operacoes) {
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
