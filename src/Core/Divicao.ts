
import { IOperacao } from '@Port/IOperacao'
import { injectable } from 'inversify'

@injectable()
export class Divicao implements IOperacao {
  public calcular (valor: number, valor2: number): number {
    this.validate(valor, valor2)
    return valor / valor2
  }

  private validate (valor: number, valor2: number): void | Error {
    if ([
      !!valor,
      !!valor2,
      valor2 > 0
    ].filter(function (notNull) { return !notNull }).length) { throw new Error('Valores invalidos') }
  }
}
