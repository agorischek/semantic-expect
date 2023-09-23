import {
  Example,
  ExampleInput,
  ExampleOutput,
  OpenAIMessage,
} from "./types.js";

import { examples, instructions } from "./prompting.js";
import OpenAI from "openai";

export function renderInstructions(): string {
  const rendered = `Instructions: ${instructions}`;
  return rendered;
}

export function renderInput(input: ExampleInput): string {
  const rendered = `Rule: ${input.rule}\nContent: ${input.content}`;
  return rendered;
}

export function renderOutput(output: ExampleOutput): string {
  const rendered = `Assessment: ${output.assessment}\nResult: ${output.pass}`;
  return rendered;
}

export function renderInputMessage(input: ExampleInput): OpenAIMessage {
  const message: OpenAIMessage = {
    role: "user",
    content: renderInput(input),
  };
  return message;
}

export function renderOutputMessage(output: ExampleOutput): OpenAIMessage {
  const message: OpenAIMessage = {
    role: "assistant",
    content: renderOutput(output),
  };
  return message;
}

export function renderMessages(rule: string, content: string): OpenAIMessage[] {
  const messages: OpenAIMessage[] = [];

  const systemMessage: OpenAIMessage = {
    role: "system",
    content: instructions,
  };
  messages.push(systemMessage);

  const exampleMessages = examples.reduce((acc, example) => {
    acc.push(renderInputMessage(example));
    acc.push(renderOutputMessage(example));
    return acc;
  }, []);
  messages.push(...exampleMessages);

  const promptMessage = renderInputMessage({ rule, content });
  messages.push(promptMessage);

  return messages;
}

export function renderExample(example: Example): string {
  const rendered = `${renderInput(example)}\n${renderOutput(example)}\n`;
  return rendered;
}

export function renderExamples(examples: Example[]): string {
  const rendered = examples.reduce((acc, example) => {
    acc = `${acc}\n${renderExample(example)}`;
    return acc;
  }, "");
  return rendered;
}

export function renderPrompt(rule: string, content: string): string {
  const prompt = `${renderInstructions()}\n${renderExamples(
    examples
  )}\n${renderInput({
    rule,
    content,
  })}`;
  return prompt;
}
