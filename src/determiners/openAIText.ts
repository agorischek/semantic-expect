import { OpenAI } from 'openai';

import { makeOpenAITextCompleter } from '../completers/openAIText.js';
import { extractDetermination } from '../parsers/determination.js';
import { renderPrompt } from '../renderers/prompt.js';
import { Determiner } from '../types/determiners.js';
import { Options } from '../types/options.js';

export function makeOpenAITextDeterminer(
  openai: OpenAI,
  options: Options = {},
): Determiner {
  const complete = makeOpenAITextCompleter(openai, options);

  const determiner: Determiner = async ({ assertion, content }) => {
    const prompt = renderPrompt({
      assertion,
      content,
      additionalExamples: options.examples,
    });
    const completion = await complete(prompt);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determiner;
}
