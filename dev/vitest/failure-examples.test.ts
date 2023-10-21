import { describe, expect, it } from 'vitest';

import { writeJoke } from '../shared/writeJoke.js';

describe('Joke Writer', () => {
  it('Should write jokes about computers', async () => {
    const generator = () => writeJoke('computers');

    await expect(generator).toGenerate('A joke about fruits', 10);
  });
});
