export type OpenAIMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};
