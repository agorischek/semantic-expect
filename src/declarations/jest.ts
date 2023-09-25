/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toDefinitely(requirement: string): Promise<R>;
    }
  }
}
