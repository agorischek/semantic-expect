import {
  Example,
  ExampleInput,
  ExampleOutput,
  OpenAIMessage,
} from "./types.js";

import { defaultExamples, defaultInstructions } from "./prompting.js";

export function renderInstructions(): string {
  const rendered = `Instructions: ${defaultInstructions}`;
  return rendered;
}

export function renderInput(input: ExampleInput): string {
  const rendered = `Content: ${input.content}\nRule: ${input.rule}`;
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

export function renderMessages(details: {
  rule: string;
  content: string;
  additionalExamples?: Example[];
}): OpenAIMessage[] {
  const messages: OpenAIMessage[] = [];

  const systemMessage: OpenAIMessage = {
    role: "system",
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
    rule: details.rule,
    content: details.content,
  });
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

export function renderPrompt(details: {
  rule: string;
  content: string;
  additionalExamples?: Example[];
}): string {
  const examples = buildExamples(details.additionalExamples);
  const prompt = `${renderInstructions()}\n${renderExamples(
    examples
  )}\n${renderInput({
    rule: details.rule,
    content: details.content,
  })}`;
  console.log(prompt);
  return prompt;
}

function buildExamples(additionalExamples?: Example[]): Example[] {
  const examples = additionalExamples
    ? [...defaultExamples, ...additionalExamples]
    : defaultExamples;
  return examples;
}
