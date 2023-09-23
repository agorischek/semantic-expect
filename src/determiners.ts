import { OpenAI } from "openai";

import { extractDetermination } from "./parsers.js";
import { renderMessages, renderPrompt } from "./renderers.js";
import { Determiner } from "./types.js";
import {
  makeOpenAiChatCompleter,
  makeOpenAiTextCompleter,
} from "./completers.js";

export function makeOpenAITextDeterminer(openai: OpenAI): Determiner {
  const complete = makeOpenAiTextCompleter(openai);

  const determiner: Determiner = async (rule, content) => {
    const prompt = renderPrompt(rule, content);
    const completion = await complete(prompt);
    console.log(completion);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determiner;
}

export function makeOpenAIChatDeterminer(openai: OpenAI): Determiner {
  const complete = makeOpenAiChatCompleter(openai);

  const determine: Determiner = async (rule, content) => {
    const messages = renderMessages(rule, content);
    const completion = await complete(messages);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determine;
}
