import { Determination, Determiner, Iteration } from '../types/determiners.js';
import { Generator } from '../types/generation.js';

export const generateMultiple = async (
  generator: Generator,
  count: number,
): Promise<string[]> => {
  const generations = await Promise.all(
    Array.from({ length: count }, () => generator()),
  );
  return generations;
};

export const determineMultiple = async (
  requirement: string,
  generations: string[],
  determine: Determiner,
): Promise<Determination[]> => {
  const determinations = await Promise.all(
    generations.map((content) => determine({ content, requirement })),
  );
  return determinations;
};

export const mapDeterminations = (
  determinations: Determination[],
  generations: string[],
): Iteration[] => {
  const iterations = determinations.map(({ assessment, pass }, index) => {
    return {
      content: generations[index],
      assessment,
      pass,
      index,
    };
  });
  return iterations;
};

export const resolvePass = (isNot: boolean, iterations: Iteration[]) => {
  if (isNot) {
    const passCount = iterations.filter(({ pass }) => pass).length;
    const pass = passCount > 0;
    return pass;
  } else {
    const failureCount = iterations.filter(({ pass }) => !pass).length;
    const pass = failureCount === 0;
    return pass;
  }
};
