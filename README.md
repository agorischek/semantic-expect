# 🔡🤞 Semantic Expect

LLM-based test assertions for Jest

> This library is an early alpha and it seeking contributors!

```ts
import OpenAI from 'openai';
import { makeOpenAIMatchers } from 'semantic-expect';
import { generateCompliment } from './my-llm-functions.js';

expect.extend(makeOpenAIMatchers(new OpenAI()));

test('Compliment generator', async () => {
  // Nondeterministic function, typically powered by generative AI
  const compliment = await generateCompliment();

  // Provide a rule that must be followed
  await expect(compliment).toHeed('Be positive');
});
```

## To-do

- Support LLM providers other than OpenAI
- Support running a generator multiple times (e.g.
  `expect(randomCompliment).toHeedTimes("Be nice", 5)`)
- Message formats for additional test runners
- Test coverage
- Docs
