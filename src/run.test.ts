import { determine } from "./prompt.js";
import { expect, test, it } from "vitest";

import { matchers } from "./matchers.js";

const rule = "Must mention a color";
const content = "The sofa looks nice.";

const result = await determine(rule, content);

console.log(result);

expect.extend(matchers);

test("custom matcher test", async () => {
  // await expect("Apples and bananas").toHeed("Mention an animal");
  await expect("Apples and chairs").toHeed("Mention a fruit");
});

// test("messages", () => {
//   expect("hello").toMatch("hf");
// });
