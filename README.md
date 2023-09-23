# Semantic Expect

LLM-based test assertions for Jest and Vitest

```ts
import OpenAI from "openai";
import { makeOpenAIMatchers } from "semantic-expect";
import { generateCompliment } from "./my-llm-functions.js";

expect.extend(makeOpenAIMatchers(new OpenAI()));

test("Compliment generator", async () => {
  // Nondeterministic function, typically powered by generative AI
  const compliment = await generateCompliment();

  // Provide a rule that must be followed
  await expect(compliment).toHeed("Be positive");
});
```
