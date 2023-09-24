import 'dotenv/config';

import { OpenAI } from 'openai';
import { makeOpenAIMatchers } from './src/index.js';
import { expect } from 'vitest';

const matchers = makeOpenAIMatchers(new OpenAI());
expect.extend(matchers);
