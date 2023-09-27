/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toGenerate(requirement: string, count?: number): Promise<R>;
    }
  }
}
