import { ExampleOutput } from '../types/examples.js';
import { OpenAIMessage } from '../types/messages.js';

export function renderOutput(output: ExampleOutput): string {
  const rendered = `Assessment: ${output.assessment}\nResult: ${output.pass}`;
  return rendered;
}

export function renderOutputMessage(output: ExampleOutput): OpenAIMessage {
  const message: OpenAIMessage = {
    role: 'assistant',
    content: renderOutput(output),
  };
  return message;
}
