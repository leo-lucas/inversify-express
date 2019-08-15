import { Container } from 'inversify'
import { Divisao } from '../Core/Divisao'
import { Subtracao } from '../Core/Subtracao'
import { Soma } from '../Core/Soma'
import { Multiplicacao } from '../Core/Multiplicacao'

import { ResourceOperacao } from '../Controllers/ResourceOperacao'
import 'reflect-metadata'

import { IResourceOperacao } from '@Port/IResourceOperacao'
import { IOperacao } from '@Port/IOperacao'

// set up container
let container = new Container()

// set up bindings
container.bind<IResourceOperacao>('ResourceOperacao').to(ResourceOperacao)
container.bind<IOperacao>('Operacao').to(Divisao)
container.bind<IOperacao>('Operacao').to(Multiplicacao)
container.bind<IOperacao>('Operacao').to(Soma)
container.bind<IOperacao>('Operacao').to(Subtracao)

export default container
