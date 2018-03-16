import { sayHello } from '../../src/modules/greetings';

test('logs correct default string', () => {
  expect(sayHello()).toBe('Say Hello says, of all things, hellooooo!');
});
