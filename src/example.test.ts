// import { determine } from "./determiners.js";
import "dotenv/config";
import { expect, test, it } from "vitest";

import { makeOpenAIMatchers, makeOpenAITextMatchers } from "./matchers.js";
import OpenAI from "openai";

const matchers = makeOpenAITextMatchers(new OpenAI(), {
  model: "gpt-3.5-turbo-instruct",
});
expect.extend(matchers);

test("custom matcher test", async () => {
  await expect("The sky is blue.").toHeed("Be a complete sentence.");
});

// test("messages", () => {
//   expect("hello").toMatch("hf");
// });
