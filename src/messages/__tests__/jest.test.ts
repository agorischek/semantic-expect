import { expect, it, describe } from 'vitest';

import { renderMessage } from '../message.js';

describe('Unformatted message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(`
      "[2mexpect([22m[31mreceived[39m[2m).[22mtoHeed[2m([22m[32mrule[39m[2m)[22m

      Rule: [32m\\"Use English\\"[39m
      Received: [31m\\"Hello World\\"[39m [2m// Uses English[22m"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(`
      "[2mexpect([22m[31mreceived[39m[2m).[22mtoHeed[2m([22m[32mrule[39m[2m)[22m

      Rule: [32m\\"Use Spanish\\"[39m
      Received: [31m\\"Hello World\\"[39m [2m// Uses English[22m"
    `);
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(`
      "[2mexpect([22m[31mreceived[39m[2m).[22mnot[2m.[22mtoHeed[2m([22m[32mrule[39m[2m) // Fails if rule is followed[22m

      Rule: [32m\\"Use English\\"[39m
      Received: [31m\\"Hello World\\"[39m [2m// Uses English[22m"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(`
      "[2mexpect([22m[31mreceived[39m[2m).[22mnot[2m.[22mtoHeed[2m([22m[32mrule[39m[2m) // Fails if rule is followed[22m

      Rule: [32m\\"Use Spanish\\"[39m
      Received: [31m\\"Hello World\\"[39m [2m// Uses English[22m"
    `);
  });
});
