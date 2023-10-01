import { describe, expect, it } from 'vitest';

describe.concurrent('toGenerate Matcher', () => {
  it('Should detect a color', async () => {
    const generator = () => 'Red and round';
    await expect(generator).toGenerate('A color', 1);
  });

  it('Should detect language', async () => {
    const generator = () => 'Hola';
    await expect(generator).toGenerate('Spanish', 1);
  });

  it('Should count things', async () => {
    const generator = () => 'Apples and bananas and cherries';
    await expect(generator).toGenerate('Three things', 1);
  });

  it('Should detect grammar', async () => {
    const generator = () => 'This is bad grammar';
    await expect(generator).not.toGenerate('Correct grammar', 1);
  });
});
