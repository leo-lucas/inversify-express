import { TypeOperacoes } from 'Core/TypeOperacoes'
export interface IOperacao {
  calc(valor: number, valor2: number, operacao:TypeOperacoes): number ;
}
