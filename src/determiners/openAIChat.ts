import { OpenAI } from 'openai';

import { extractDetermination } from '../parsers/determination.js';
import { renderMessages } from '../renderers/messages.js';
import { Options } from '../types/options.js';
import { Determiner } from '../types/determiners.js';
import { makeOpenAIChatCompleter } from '../completers/openAIChat.js';

export function makeOpenAIChatDeterminer(
  openai: OpenAI,
  options: Options = {},
): Determiner {
  const complete = makeOpenAIChatCompleter(openai, options);
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
