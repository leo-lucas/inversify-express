import { IOperacao } from '@Port/IOperacao'
import { injectable } from 'inversify'

@injectable()
export class Subtracao implements IOperacao {
  public calcular(valor: number, valor2: number): number {
    return valor - valor2
  }
}
