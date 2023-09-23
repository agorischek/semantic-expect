import { describe, expect, it } from "vitest";
import { renderPrompt } from "../renderers.js";

describe("prompt renderers", () => {
  it("renders a prompt", () => {
    const content = "Red";
    const rule = "Must be a color";
    const prompt = renderPrompt(rule, content);
    expect(prompt).toMatchInlineSnapshot(`
      "Instructions: You accept content and a rule. You provide an assessment of whether the content passes the rule, then indicate that Pass is either \`true\` (passes) or \`false\` (fails).

      Rule: Must mention a fruit.
      Content: I need to pick up bananas and bread.
      Assessment: Mentions bananas
      Result: true

      Rule: Must be positive.
      Content: This is absolutely awful!!
      Assessment: Contains negative sentiment
      Result: false

      Rule: Must not mention colors.
      Content: Circles, squares, and triangles.
      Assessment: Does not mention colors
      Result: true

      Rule: Must be in English
      Content: Bonjour le monde.
      Assessment: Is in French
      Result: false

      Rule: Must be in French
      Content: Bonjour le monde.
      Assessment: Is in French
      Result: true

      Rule: Must be one sentence
      Content: Hello, I'm a programmer. I love TypeScript!
      Assessment: Is two sentences
      Result: false

      Rule: Must be a color
      Content: Red"
    `);
  });
});
