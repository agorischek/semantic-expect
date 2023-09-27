import { MockGenerator } from './MockGenerator.js';

const generator = new MockGenerator([
  'Hello World',
  'Bonjour Du Monde',
  'Hola Mundo',
  'The grass is green',
  'Hallo Welt',
  'The sky is blue',
]);
export const helloWorld = () => generator.generate();
