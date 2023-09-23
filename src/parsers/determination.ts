import { DeterminationParser } from "../types/determiners.js";

export const extractDetermination: DeterminationParser = (
  completion: string
) => {
  const [first, second] = completion.split("\n").filter((line) => line.trim());
  const assessment = first.split(":")[1].trim();
  const result = second.split(":")[1].trim().toLowerCase();
  const pass = result === "true";
  return { pass, assessment };
};
