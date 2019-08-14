
import { IOperacao } from '@Port/IOperacao'
import { TypeOperacoes } from './TypeOperacoes'
import { injectable } from 'inversify'

@injectable()
export class Operacao implements IOperacao {
  public calc (valor: number, valor2: number, operacao:TypeOperacoes): number {
    return { [TypeOperacoes.add]: valor + valor2,
      [TypeOperacoes.sub]: valor - valor2,
      [TypeOperacoes.div]: valor / valor2,
      [TypeOperacoes.mul]: valor * valor2
    }[operacao]
  }
}
