import { OpenAIStream2 } from "../OpenAIStream";
//import dotenv from 'dotenv';
//dotenv.config();
import { ChatCompletionRequestMessage } from "openai";


export const runtime = 'edge'
//const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
//const openai = new OpenAIApi(configuration);


let prePrompt: ChatCompletionRequestMessage[] = [
    {role: "user", content: "Tu es un consultant McKinsey sénior. Tu me fais passer un entretien d'embauche et c'est le moment de me faire passer une étude de cas. Tu vas me donner la problématique de l'étude de cas et je vais devoir y répondre. Tu me guides dans l'exercice si je suis en difficulté ou si je m'écarte trop du sujet, sans me donner directement les réponses. À la fin, tu me fais un débrief sur ce qui était bien et ce qui doit être amélioré."},
    {role: "user", content: "Tu t'attends à ce que je commence par poser quelques questions pour éclaircir le cas, mais tu ne me demandes pas si j'ai des questions. On commence."},
    {role: "assistant", content: "Ok, c'est parti. Il est temps de passer à l'étude de cas. Êtes-vous prêt ?"},
];

export async function POST(req: Request): Promise<Response> {

    const { prompt } = (await req.json()) as {
        prompt: ChatCompletionRequestMessage[];
    };

    const fullConv = prePrompt.concat(prompt);
    const payload = {
        model: "gpt-3.5-turbo",
        messages: fullConv,
        stream: true,
    };

    const stream = await OpenAIStream2(payload);
    return new Response(stream);
};

