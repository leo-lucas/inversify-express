
export enum TypeOperacoes {
  div,
  mul,
  som,
  sub
}

export type operacoes ='div'|'mul'|'som'|'sub'

export function getType (valor :operacoes) {
  return {
    div: TypeOperacoes.div,
    mul: TypeOperacoes.mul,
    som: TypeOperacoes.som,
    sub: TypeOperacoes.sub
  }[valor]
}
