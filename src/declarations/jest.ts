/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toDefinitely(assertion: string): Promise<R>;
    }
  }
}
