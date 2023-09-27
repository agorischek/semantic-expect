import { helloWorld } from '../shared/helloWorld.js';
import { writeJoke } from '../shared/writeJoke.js';

describe('toGenerate', () => {
  it('Should write jokes about electricity', async () => {
    const generator = () => writeJoke('about electricity');
    await expect(generator).toGenerate('A joke about computers', 3);
  });

  it.only('Should translate unspecified languages', async () => {
    await expect(helloWorld).toGenerate('Hello World (in any language)', 6);
  });
});
