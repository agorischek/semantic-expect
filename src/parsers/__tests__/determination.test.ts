import { describe, expect, it } from 'vitest';

import { extractDetermination } from '../determination.js';

describe('extractDetermination', () => {
  it('extracts the result from a response', () => {
    const response = `Assessment: Expresses happy sentiment\nResult: true`;
    const result = extractDetermination(response);

    expect(result).toEqual({
      assessment: 'Expresses happy sentiment',
      pass: true,
    });
  });
});
