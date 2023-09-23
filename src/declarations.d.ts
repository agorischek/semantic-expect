// Vitest

interface CustomMatchers<R = unknown> {
  toHeed(rule: string): Promise<R>;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

// Jest

export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toHeed(rule: string): Promise<R>;
    }
  }
}
