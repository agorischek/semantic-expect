import { DeterminationParser } from "./types.js";

export const extractDetermination: DeterminationParser = (
  completion: string
) => {
  const [first, second] = completion.split("\n").filter((line) => line.trim());
  const message = first.split(":")[1].trim();
  const result = second.split(":")[1].trim().toLowerCase();
  const pass = result === "true";
  return { pass, message };
};
