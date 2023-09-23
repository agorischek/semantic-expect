// import { expect, it, describe } from "vitest";
import { extractDetermination } from '../parsers/determination.js';

describe('extractDetermination', () => {
  it.skip('extracts the result from a response', () => {
    const response = `Assessment: Expresses happy sentiment\nResult: true`;
    const result = extractDetermination(response);

    expect(result).toEqual({
      message: 'Expresses happy sentiment',
      pass: true,
    });
  });
});
