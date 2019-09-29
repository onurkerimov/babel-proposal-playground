import { Component } from 'my-library'
import { decorator, anotherDecorator, decoratorThatTakesArguments } from '@my-library/decorators'

@decoratorThatTakesArguments(12, 24)
class MyComponent extends Component {
  @decorator
  @anotherDecorator
  className = 'my-component'

  @decoratorThatTakesArguments('click', 'handler')
  clickHandler() {}

  @decorator
  render() {}
}

let instance = new MyComponent()
console.log(instance)
