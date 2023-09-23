import { ExampleInput } from "../types/examples.js";
import { OpenAIMessage } from "../types/messages.js";

export function renderInput(input: ExampleInput): string {
  const rendered = `Content: ${input.content}\nRule: ${input.rule}`;
  return rendered;
}

export function renderInputMessage(input: ExampleInput): OpenAIMessage {
  const message: OpenAIMessage = {
    role: "user",
    content: renderInput(input),
  };
  return message;
}
