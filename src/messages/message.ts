import { Format } from '../types/options.js';
import { ResultMessageDetails } from '../types/results.js';
import { renderJestMessage } from './jest.js';

export const renderMessage = (
  format: Format,
  details: ResultMessageDetails,
) => {
  switch (format) {
    case 'jest':
      return renderJestMessage(details);
    default:
      return renderJestMessage(details);
  }
};
