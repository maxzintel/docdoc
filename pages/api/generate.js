import { Configuration, OpenAIApi } from 'openai';
import { basePromptPrefix } from '../index.js';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  console.log(`base prefix: ${basePromptPrefix}`)
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  // see createCompletion docs here: https://beta.openai.com/docs/api-reference/completions/create?utm_source=buildspace.so&utm_medium=buildspace_project
  const baseCompletion = await openai.createCompletion({
    // model type we want to use.
    model: 'text-davinci-003',
    // prompt we are passing. Base prompt and user input.
    prompt: `${basePromptPrefix[0]}${req.body.userInput}`,
    // risk level we want openai to take.
    temperature: 0.7,
    // increase to allow for longer prompts. 250 = approx 1000 characters.
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop()

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;