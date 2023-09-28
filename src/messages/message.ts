import { ResultMessageFormat } from '../types/options.js';
import { ResultMessageDetails } from '../types/results.js';
import { renderJestMessage } from './jest.js';
import { renderUnformattedMessage } from './unformatted.js';
import { renderVitestMessage } from './vitest.js';

export const renderMessage = (
  format: ResultMessageFormat,
  details: ResultMessageDetails,
) => {
  switch (format) {
    case 'jest':
      return renderJestMessage(details);
    case 'unformatted':
      return renderUnformattedMessage(details);
    case 'vitest':
      return renderVitestMessage(details);
    default:
      return renderUnformattedMessage(details);
  }
};
