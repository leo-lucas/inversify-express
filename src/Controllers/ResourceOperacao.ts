import {
  controller,
  httpGet,
  BaseHttpController,
  queryParam,
  requestParam,
} from 'inversify-express-utils'
import { IResourceOperacao } from '@Port/IResourceOperacao'
import { multiInject } from 'inversify'
import { IOperacao } from '@Port/IOperacao'
import { getType, operacoes } from '../Ports/Core/TypeOperacoes'
import {
  ApiPath,
  ApiOperationGet,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts'

@ApiPath({
  path: '/api',
  name: 'Calcularoda',
})
@controller('/api')
export class ResourceOperacao extends BaseHttpController
  implements IResourceOperacao {
  public constructor(@multiInject('Operacao') private operacoes: IOperacao[]) {
    super()
  }

  @ApiOperationGet({
    description: 'Get versions objects list',
    path: '/{operando}',
    summary: 'Get versions list',
    parameters: {
      path: {
        operando: { type: 'enum', format: '[div|mul|som|sub]', required: true },
      },
      query: { val1: { type: 'number' }, val2: { type: 'number' } },
    },
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
      },
    },
  })
  @httpGet('/:operando')
  public async calc(
    @requestParam('operando') operando: operacoes,
    @queryParam('val1') operador1: string,
    @queryParam('val2') operador2: string,
  ) {
    this.validateOperacao(operando)
    return this.json({
      valor: this.operacoes[getType(operando)].calcular(
        Number(operador1),
        Number(operador2),
      ),
    })
  }

  @httpGet('/:operando')
  public async calc2(
    @requestParam('operando') operando: operacoes,
    @queryParam('val1') operador1: string,
    @queryParam('val2') operador2: string,
  ) {
    this.validateOperacao(operando)
    return this.json({
      valor: this.operacoes[getType(operando)].calcular(
        Number(operador1),
        Number(operador2),
      ),
    })
  }

  public validateOperacao(operando: operacoes): boolean {
    if (['div', 'mul', 'som', 'sub'].includes(operando)) return true
    throw Error('Operador invalido')
  }
}
