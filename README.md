# 🔡🤞 Semantic Expect

> This library is an early alpha and is seeking contributors!

LLM-based test assertions for Vitest and Jest

```ts
import { OpenAI } from 'openai';
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

## Setup

To use Semantic Expect, you'll need to register custom matchers with your test
runner. Instructions vary slightly by runner, but generally look like this:

```ts
// First, import and instantiate your LLM client
// If you already instantiate your LLM client elsewhere, you can reuse that client
import { OpenAI } from 'openai';

const model = new OpenAI();

// Second, build the matchers by submitting the LLM client
const matchers = makeOpenAIMatchers(model);

// Finally, register the matchers
expect.extend(matchers);
```

You can typically do all of this on one line if preferred:

```ts
expect.extend(makeOpenAIMatchers(new OpenAI()));
```

See [Jest `expect.extend()`](https://jestjs.io/docs/expect#expectextendmatchers)
and
[Vitest Extending Matchers](https://vitest.dev/guide/extending-matchers.html)
for further details.

To use custom matchers across multiple test files, you can register them in a
separate setup file. See
[Jest `setupFilesAfterEnv` configuration](https://jestjs.io/docs/configuration#setupfilesafterenv-array)
and [Vitest `setupFiles` configuration](https://vitest.dev/config/#setupfiles)
for further details.

## Models

Semantic Expect provides multiple options for the models backing the custom
matchers.

- `makeOpenAIMatchers`: Uses OpenAI backend and defaults to chat-based model
  (alias for `makeOpenAIChatMatchers`)
- `makeOpenAIChatMatchers`: Uses OpenAI backend and always uses chat-based model
- `makeOpenAITextMatchers`: Uses OpenAI backend and always uses text-based
  (instruct) model

You can also specify a specific model via `options` if desired:

```ts
const textMatchers = makeOpenAITextMatchers(client, {
  model: 'text-davinci-003',
});
const chatMatchers = makeOpenAIChatMatchers(client, { model: 'gpt-4' });
```

## Message formats

Semantic Expect generates an unformatted test result message by default, however
this can be customized for your test runner and preferences:

```ts
const jestMatchers = makeOpenAIMatchers(client, { format: 'jest' });
const vitestMatchers = makeOpenAIMatchers(client, { format: 'vitest' });
```

## Additional examples

Semantic Expect includes general examples by default, however your particular
use case may benefit from additional guidance. Examples include the following
properties:

- `rule`: A description of the rule the model should heed, such as
  `"Be professional"`
- `content`: The content being submitted for assessment, such as
  `"What's up?? 🤪"`
- `assessment`: A brief assessment of why the content does or doesn't heed the
  rule, such as `"Uses casual language"`
- `pass`: `true` if rule is heeded, `false` if not

Additional examples are registered when you create your matchers:

```ts
const matchers = makeOpenAIMatchers(client, {
  examples: [
    {
      rule: 'Be professional',
      content: "What's up?? 🤪",
      assessment: 'Uses casual language',
      pass: false,
    },
  ],
});
```

There is no hard limit to the number of custom examples you can provide, however
note that you may eventually run up against token limits imposed by your model.

## To-do

- Support LLM providers other than OpenAI
- Support running a generator multiple times (e.g.
  `expect(randomCompliment).toHeedTimes("Be nice", 5)`)
- Message formats for additional test runners, and fully custom format function
- Test coverage
- Docs
