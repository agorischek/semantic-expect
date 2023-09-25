import { OpenAI } from 'openai';

import { makeOpenAIChatCompleter } from '../completers/openAIChat.js';
import { extractDetermination } from '../parsers/determination.js';
import { renderMessages } from '../renderers/messages.js';
import { Determiner } from '../types/determiners.js';
import { Options } from '../types/options.js';

export function makeOpenAIChatDeterminer(
  openai: OpenAI,
  options: Options = {},
): Determiner {
  const complete = makeOpenAIChatCompleter(openai, options);
  const determine: Determiner = async ({ requirement, content }) => {
    const messages = renderMessages({
      requirement,
      content,
      additionalExamples: options.examples,
    });
    const completion = await complete(messages);
    const determination = extractDetermination(completion);
    return determination;
  };

  return determine;
}
