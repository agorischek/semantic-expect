import { describe, expect, it } from 'vitest';

describe('To Heed Matcher', () => {
  it('Should detect a color', async () => {
    await expect('Red and round').toHeed('Include a color');
  });

  it('Should detect language', async () => {
    await expect('Hola').toHeed('Use Spanish');
  });

  it('Should count things', async () => {
    await expect('apples and bananas and cherries').toHeed(
      'Mention three things',
    );
  });

  it('Should detect grammar', async () => {
    await expect('This are bad grammar').not.toHeed('Use correct grammar');
  });
});
