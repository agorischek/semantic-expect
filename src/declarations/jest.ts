/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toHeed(rule: string): Promise<R>;
    }
  }
}
