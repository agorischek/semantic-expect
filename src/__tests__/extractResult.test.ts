import { expect, it, describe } from "vitest";
import { extractResult } from "../extractResult.js";

describe("extractResult", () => {
  it("extracts the result from a response", () => {
    const response = `Assessment: Expresses happy sentiment\nResult: true`;
    const result = extractResult(response);

    expect(result).toEqual({
      message: "Expresses happy sentiment",
      pass: true,
    });
  });
});
