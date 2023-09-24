import 'dotenv/config';
import { OpenAI } from 'openai';
import { expect } from 'vitest';

import { makeOpenAIMatchers } from './src/index.js';

const matchers = makeOpenAIMatchers(new OpenAI());
expect.extend(matchers);
