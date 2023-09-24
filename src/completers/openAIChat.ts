import { OpenAI } from 'openai';

import { models } from '../defaults/models.js';
import { CompleterFactory } from '../types/completers.js';
import { OpenAIMessage } from '../types/messages.js';

export const makeOpenAIChatCompleter: CompleterFactory<
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
    return completion;
  };
  return completer;
};
