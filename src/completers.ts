import { CompleterFactory, OpenAIMessage } from "./types.js";
import { OpenAI } from "openai";

import { models } from "./defaults.js";

export const makeOpenAiTextCompleter: CompleterFactory<OpenAI, string> = (
  openai,
  options
) => {
  const completer = async (prompt: string) => {
    const response = await openai.completions.create({
      model: options?.model ?? models.openAIText,
      prompt,
      temperature: 0,
      max_tokens: 100,
    });
    const completion = response.choices[0].text;
    return completion;
  };
  return completer;
};

export const makeOpenAiChatCompleter: CompleterFactory<
  OpenAI,
  OpenAIMessage[]
> = (openai, options) => {
  const completer = async (messages: OpenAIMessage[]) => {
    const response = await openai.chat.completions.create({
      model: options?.model ?? models.openAIChat,
      messages,
      temperature: 0,
      max_tokens: 100,
    });
    const completion = response.choices[0].message.content;
    console.log(completion);
    return completion;
  };
  return completer;
};
