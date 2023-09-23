import "dotenv/config";
import { expect, test, it } from "vitest";

import { makeOpenAIMatchers } from "./matchers.js";
import OpenAI from "openai";

expect.extend(makeOpenAIMatchers(new OpenAI()));

test("Color Extraction", async () => {
  const description = "The ball is red and round";
  await expect(description).toHeed("Mention the color");
});
