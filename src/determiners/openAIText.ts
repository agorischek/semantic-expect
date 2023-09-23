import { OpenAI } from "openai";

import { extractDetermination } from "../parsers/determination.js";
import { renderPrompt } from "../renderers/prompt.js";
import { Options } from "../types/options.js";
import { Determiner } from "../types/determiners.js";
import { makeOpenAITextCompleter } from "../completers/openAIText.js";

export function makeOpenAITextDeterminer(
  openai: OpenAI,
  options: Options = {}
): Determiner {
  const complete = makeOpenAITextCompleter(openai, options);

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
