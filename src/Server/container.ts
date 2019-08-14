import { Container } from 'inversify'
import { Operacao } from '../Core/Operacao'
import { ResourceOperacao } from '../Controllers/ResourceOperacao'
import 'reflect-metadata'

import { IResourceOperacao } from '@Port/IResourceOperacao'
import { IOperacao } from '@Port/IOperacao'

// set up container
let container = new Container()

// set up bindings
container.bind<IResourceOperacao>('ResourceOperacao').to(ResourceOperacao)
container.bind<IOperacao>('Operacao').to(Operacao)

export default container
