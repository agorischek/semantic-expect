import { ResultMessageFormat } from '../types/options.js';
import {
  ConsistentlyResultMessageDetails,
  DefinitelyResultMessageDetails,
  ResultMessageDetails,
} from '../types/results.js';
import { renderDefinitelyJestMessage } from './jest.js';
import {
  renderConsistentlyUnformattedMessage,
  renderDefinitelyUnformattedMessage,
  renderUnformattedMessage,
} from './unformatted.js';
import { renderDefinitelyVitestMessage } from './vitest.js';

export const renderDefinitelyMessage = (
  format: ResultMessageFormat,
  details: DefinitelyResultMessageDetails,
) => {
  switch (format) {
    case 'jest':
      return renderDefinitelyJestMessage(details);
    case 'unformatted':
      return renderDefinitelyUnformattedMessage(details);
    case 'vitest':
      return renderDefinitelyVitestMessage(details);
    default:
      return renderDefinitelyUnformattedMessage(details);
  }
};

export const renderConsistentlyMessage = (
  format: ResultMessageFormat,
  details: ConsistentlyResultMessageDetails,
) => {
  switch (format) {
    case 'jest':
      return renderConsistentlyUnformattedMessage(details);
    case 'unformatted':
      return renderConsistentlyUnformattedMessage(details);
    case 'vitest':
      return renderConsistentlyUnformattedMessage(details);
    default:
      return renderConsistentlyUnformattedMessage(details);
  }
};

export const renderMessage = (
  format: ResultMessageFormat,
  details: ResultMessageDetails,
) => {
  switch (format) {
    case 'jest':
      return renderUnformattedMessage(details);
    case 'unformatted':
      return renderUnformattedMessage(details);
    case 'vitest':
      return renderUnformattedMessage(details);
    default:
      return renderUnformattedMessage(details);
  }
};
