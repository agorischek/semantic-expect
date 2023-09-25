import { describe, expect, it } from 'vitest';

describe('toDefinitely Matcher', () => {
  it('Should detect a color', async () => {
    await expect('Red and round').toDefinitely('Include a color');
  });

  it('Should detect language', async () => {
    await expect('Hola').toDefinitely('Be in Spanish');
  });

  it('Should count things', async () => {
    await expect('apples and bananas and cherries').toDefinitely(
      'Mention three things',
    );
  });

  it('Should detect grammar', async () => {
    await expect('This are bad grammar').not.toDefinitely(
      'Use correct grammar',
    );
  });
});
