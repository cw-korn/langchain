import {config} from 'dotenv'
import { ChatOpenAI } from "@langchain/openai";

config();

const apiKey = process.env.API_KEY;


const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  openAIApiKey:apiKey,
  temperature: 0,
  // other params...
});

const aiMsg = await llm.invoke([
    [
      "system",
      "You are a helpful assistant that translates English to French. Translate the user sentence.",
    ],
    ["human", "I love programming."],
  ]);

  aiMsg;

  console.log(aiMsg.content);