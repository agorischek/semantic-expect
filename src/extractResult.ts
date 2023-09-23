import { Result } from "./types.js";

export function extractResult(response: string): Result {
  const [first, second] = response.split("\n");
  const message = first.split(":")[1].trim();
  const result = second.split(":")[1].trim().toLowerCase();
  const pass = result === "true";
  return { pass, message };
}
