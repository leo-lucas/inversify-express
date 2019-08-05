import { Container } from 'inversify'
import { TestController, ITestController } from '../Controllers/TestController'
import { TestControllerTwo } from '../Controllers/TestControllerTwo'
// set up container
let container = new Container()

// set up bindings
container.bind<ITestController>('TestController').to(TestController)
container.bind<TestControllerTwo>('TestControllerTwo').to(TestControllerTwo)

export default container
