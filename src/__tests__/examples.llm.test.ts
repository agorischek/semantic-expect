import { describe, expect, it } from 'vitest';

describe('toDefinitely Matcher', () => {
  it('Should detect a color', async () => {
    await expect('Red and round').toDefinitely('include a color');
  });

  it('Should detect language', async () => {
    await expect('Hola').toDefinitely('be in Spanish');
  });

  it('Should count things', async () => {
    await expect('apples and bananas and cherries').toDefinitely(
      'mention three things',
    );
  });

  it('Should detect grammar', async () => {
    await expect('This are bad grammar').not.toDefinitely(
      'use correct grammar',
    );
  });
});
