import 'dotenv/config';
import { OpenAI } from 'openai';

import { makeOpenAIMatchers } from '../../src/index.js';

const matchers = makeOpenAIMatchers(new OpenAI(), { format: 'jest' });
expect.extend(matchers);
