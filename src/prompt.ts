import "dotenv/config";
import { OpenAI } from "openai";

import { extractResult } from "./extractResult.js";
import { examples } from "./examples.js";
import { renderInputMessage, renderOutputMessage } from "./renderers.js";
import { Result } from "./types.js";

const openai = new OpenAI();

export async function assess(rule: string, content: string): Promise<Result> {
  const exampleMessages = examples.reduce((acc, example) => {
    acc.push(renderInputMessage(example));
    acc.push(renderOutputMessage(example));
    return acc;
  }, []);
  const promptMessage = renderInputMessage({ rule, content });

  const messages = [...exampleMessages, promptMessage];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0,
    max_tokens: 100,
  });

  const completion = response.choices[0].message.content;

  const result = extractResult(completion);

  return result;
}
