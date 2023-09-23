import "dotenv/config";

import { OpenAI } from "openai";
import { makeOpenAIMatchers } from "./src/matchers.js";

const matchers = makeOpenAIMatchers(new OpenAI());
expect.extend(matchers);
