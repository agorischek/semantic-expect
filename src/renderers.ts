export function renderInput(input: { rule: string; content: string }) {
  return `Rule: ${input.rule}\nContent: ${input.content}`;
}

export function renderOutput(input: { pass: boolean; explanation: string }) {
  return `Assessment: ${input.explanation}\nResult: ${input.pass}`;
}

export function renderInputMessage(input: { rule: string; content: string }) {
  return {
    role: "user",
    content: renderInput(input),
  };
}

export function renderOutputMessage(input: {
  pass: boolean;
  explanation: string;
}) {
  return {
    role: "assistant",
    content: renderOutput(input),
  };
}
