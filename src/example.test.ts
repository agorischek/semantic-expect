// import { expect, test, it } from "vitest";

// import { makeOpenAIMatchers } from "./matchers.js";
// import { OpenAI } from "openai";

// expect.extend(makeOpenAIMatchers(new OpenAI()));

test("Color Extraction", async () => {
  const description = "You look awful today";
  await expect(description).toHeed("Be nice");
});

// test("Let's see", () => {
//   expect({ a: true }).toMatchObject(true);
// });
