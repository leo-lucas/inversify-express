import { Container } from 'inversify'
import { TestController, ITestController } from '../Controllers/TestController'
// set up container
let container = new Container()

// set up bindings
container.bind<ITestController>('TestController').to(TestController)

export default container
