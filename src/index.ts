export {
  makeOpenAIChatMatchers,
  makeOpenAITextMatchers,
  makeOpenAIMatchers,
} from './matchers/openAI.js';

export { Options } from './types/options.js';
export { Example } from './types/examples.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toGenerate(requirement: string, count?: number): Promise<R>;
    }
  }
}
