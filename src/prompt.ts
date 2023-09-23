import "dotenv/config";
import { OpenAI } from "openai";

import { extractDetermination } from "./parsers.js";
import { examples } from "./examples.js";
import { renderInputMessage, renderOutputMessage } from "./renderers.js";
import { Determiner } from "./types.js";

const openai = new OpenAI();

export const determine: Determiner = async (rule: string, content: string) => {
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

  const result = extractDetermination(completion);

  return { pass: result.pass, message: result.message };
};
