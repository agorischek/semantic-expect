// import { determine } from "./determiners.js";
import "dotenv/config";
import { expect, test, it } from "vitest";

import { makeOpenAIChatMatchers, makeOpenAITextMatchers } from "./matchers.js";
import OpenAI from "openai";

const matchers = makeOpenAIChatMatchers(new OpenAI());
// const matchers = makeOpenAITextMatchers(new OpenAI());

// const rule = "Must mention a color";
// const content = "The sofa looks nice.";

// const result = await determine(rule, content);

// console.log(result);

expect.extend(matchers);

test("custom matcher test", async () => {
  await expect("One, two").toHeed("Must count to three.");
});

// test("messages", () => {
//   expect("hello").toMatch("hf");
// });
