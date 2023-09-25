import { defaultInstructions } from '../prompting/instructions.js';
import { Example } from '../types/examples.js';
import { OpenAIMessage } from '../types/messages.js';
import { buildExamples } from './examples.js';
import { renderInputMessage } from './input.js';
import { renderOutputMessage } from './output.js';

export function renderMessages(details: {
  assertion: string;
  content: string;
  additionalExamples?: Example[];
}): OpenAIMessage[] {
  const messages: OpenAIMessage[] = [];

  const systemMessage: OpenAIMessage = {
    role: 'system',
    content: defaultInstructions,
  };
  messages.push(systemMessage);

  const examples = buildExamples(details.additionalExamples);

  const exampleMessages = examples.reduce((acc, example) => {
    acc.push(renderInputMessage(example));
    acc.push(renderOutputMessage(example));
    return acc;
  }, []);
  messages.push(...exampleMessages);

  const promptMessage = renderInputMessage({
    assertion: details.assertion,
    content: details.content,
  });
  messages.push(promptMessage);

  return messages;
}
