import { IOperacao } from '@Port/IOperacao'
import { injectable } from 'inversify'

@injectable()
export class Soma implements IOperacao {
  public calcular(valor: number, valor2: number): number {
    return valor + valor2
  }
}
