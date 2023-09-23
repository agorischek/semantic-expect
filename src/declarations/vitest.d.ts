interface CustomMatchers<R = unknown> {
  toHeed(rule: string): Promise<R>;
}

declare module 'vitest' {
  interface Assertion<T = unknown> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
