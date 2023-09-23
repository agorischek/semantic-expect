import { OpenAI } from "openai";

import { extractDetermination } from "./parsers.js";
import { renderMessages, renderPrompt } from "./renderers.js";
import { Determiner, Options } from "./types.js";
import {
  makeOpenAiChatCompleter,
  makeOpenAiTextCompleter,
} from "./completers.js";

export function makeOpenAITextDeterminer(
  openai: OpenAI,
  options: Options = {}
): Determiner {
  const complete = makeOpenAiTextCompleter(openai, options);

  const determiner: Determiner = async ({ rule, content }) => {
    const prompt = renderPrompt({
      rule,
      content,
      additionalExamples: options.examples,
    });
    const completion = await complete(prompt);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determiner;
}

export function makeOpenAIChatDeterminer(
  openai: OpenAI,
  options: Options = {}
): Determiner {
  const complete = makeOpenAiChatCompleter(openai, options);
  const determine: Determiner = async ({ rule, content }) => {
    const messages = renderMessages({
      rule,
      content,
      additionalExamples: options.examples,
    });
    const completion = await complete(messages);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determine;
}
