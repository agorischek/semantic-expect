# 🔡🤞 Semantic Expect

> This library is in early development and is seeking contributors!

LLM-based test assertions for Vitest and Jest

```ts
test('Joke writer', async () => {
  await expect(writeJoke).toGenerate('Something funny');
});
```

## Philosophy

Developing applications backed by generative artificial intelligence (such as
large language models) requires us to redefine the very notion of "reliability".
No longer is it possible — or even desirable — to expect our applications to do
exactly what we program them to do: Not only are LLMs fundamentally
non-deterministic, but exhibiting emergent and unprogrammed behaviors is one of
the key things that makes LLMs so powerful in the first place. Any
production-grade LLM-powered system will require multiple quality assurance
mechanisms, including run-time checks and live service monitoring. Semantic
Expect's role is to shift basic validation left and verify essential behavior
before shipping. It will always be possible to tweak prompts and eke out
slightly better responses, but some behaviors may be simply unacceptable to ship
at all. Semantic Expect lets you write tests for generative features that can be
added to your continuous integration and deployment processes, alongside
end-to-end and integration tests. You should err toward defining rules that
express _acceptable_ behavior rather than _perfect_ behavior; otherwise your
tests may exhibit "flakiness" that impedes development velocity.

## Setup

To use Semantic Expect, you'll need to register custom matchers with your test
runner. Instructions vary slightly by runner, but generally look like this:

```ts
// First, import your LLM client and a matcher factory
import { OpenAI } from 'openai';
import { makeOpenAIMatchers } from 'semantic-expect';

const model = new OpenAI();

// Second, build the matchers by submitting the LLM client
const matchers = makeOpenAIMatchers(model);

// Third, register the matchers
expect.extend(matchers);
```

You can typically do multiple steps one line if preferred:

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

## Matching

Because generative AI is fundamentally non-deterministic, it's generally not
possible to test a static input against an expected value (e.g. using `toBe`),
nor is it typically sufficient to generate only one test value for assessment.
Given these dynamics, Semantic Expect provides a `toGenerate` matcher that
accepts a generator function, runs it `n` times, and checks every generation
against a requirement:

```ts
it('Should write an on-topic joke', async () => {
  const generator = () => writeJoke('about computers');
  // Be sure to await the assertion
  await expect(generator).toGenerate('A joke about computers', 5);
});
```

**Note:** You **_must_** `await` the assertion, since the model call is
asynchronous. If you don't, the test will always pass!

If the generated content does not fulfill the requirement, the matcher will
provide a message explaining why:

```log
Each generation should be 'A joke about computers' (1 of 3 were not):
  - 'Why was the electricity feeling so powerful? Because it had a high voltage personality!' (Is a joke about electricity, not computers)
```

By default, `toGenerate` will run the generator 3 times, however a custom count
can be specified as the second argument. Of course, it's always possible for a
generator to work correctly 10 times and fail on the 11th time, but such is the
reality of working with LLMs; the best we can do is manage the risk, not
eliminate it. The requirements should be kept broad enough that they can
_definitely_ be met even with the inherent variability of the content being
tested.

If the generator being tested doesn't require any parameters, it can be
submitted on its own, without a wrapping function:

```ts
it('Should write something funny', async () => {
  await expect(writeJoke).toGenerate('Something funny');
});
```

The `toGenerate` matcher can also be negated using `not`:

```ts
it('Should write a work-appropriate joke', async () => {
  const generator = () => writeJoke('about computers');
  await expect(generator).not.toGenerate('Anything inappropriate for work', 5);
});
```

## Models

Semantic Expect provides multiple options for the models backing the custom
matchers.

- `makeOpenAIMatchers`: Uses OpenAI backend and defaults to chat-based model
  (alias for `makeOpenAIChatMatchers`)
- `makeOpenAIChatMatchers`: Uses OpenAI backend and always uses chat-based model
- `makeOpenAITextMatchers`: Uses OpenAI backend and always uses text-based
  (instruct) model

You can also specify a particular model via `options` if desired:

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

- `requirement`: A description of the desired generated content, such as
  `"A professional greeting"`
- `content`: The content being submitted for assessment, such as
  `"What's up?? 🤪"`
- `assessment`: A brief assessment of why the content does or doesn't fulfill
  the requirement, such as `"Uses casual language"`
- `pass`: `true` if requirement is fulfilled, `false` if not

Additional examples are registered when you create your matchers:

```ts
const matchers = makeOpenAIMatchers(client, {
  examples: [
    {
      requirement: 'A professional greeting',
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
- Message formats for additional test runners, and fully custom format function
- Test coverage
- Docs
