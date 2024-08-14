import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function createChatCompletion(messages: Message[]) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}