import { determine } from "./prompt.js";

export const matchers = {
  // Define your custom matchers here
  toHeed: async (recieved: string, expected: string) => {
    const determination = await determine(recieved, expected);
    return {
      pass: determination.pass,
      message: () => determination.message,
    };
  },
};
