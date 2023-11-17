import OpenAI from "openai";
import { OPENAI_KEY } from "../utils/constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser:true,
  

});


export default openai;




// const gptResults = await openai.chat.completions.create({
// messages: [{ role: "user", content: "funny movie" }],
// model: "gpt-3.5-turbo",
// });

// console.log(gptResults.choices);