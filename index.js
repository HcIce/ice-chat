require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function sendMsg () {
  try {
    const completion = await openai.createCompletion(
      {
        model: "text-davinci-003",
        prompt: "Hello world",
      },
      {
        timeout: 100000,
        headers: {
          "Example-Header": "example",
        },
      }
    );
    console.log(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
sendMsg()