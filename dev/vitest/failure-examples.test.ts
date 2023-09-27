import { describe, expect, it } from 'vitest';

import { helloWorld } from '../shared/helloWorld.js';
import { writeJoke } from '../shared/writeJoke.js';

describe('toGenerate', () => {
  it('Should write jokes about electricity', async () => {
    const generator = () => writeJoke('about electricity');
    await expect(generator).toGenerate('A joke about computers', 3);
  });

  it('Should generate "Hello World"', async () => {
    await expect(helloWorld).toGenerate('"Hello World" (in any language)"', 6);
  });
});
