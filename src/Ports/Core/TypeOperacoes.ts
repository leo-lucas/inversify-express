export enum TypeOperacoes {
  div,
  mul,
  som,
  sub,
}

export type operacoes = 'div' | 'mul' | 'som' | 'sub'

export function getType(valor: operacoes) {
  return TypeOperacoes[valor]
}
