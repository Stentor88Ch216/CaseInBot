"use server";

import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

//type role = "system" | "user" | "assistant";
const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);


let prePrompt: ChatCompletionRequestMessage[] = [
    {role: "user", content: "Je m'appelle Pablo. Répond à toutes mes questions en mentionnant mon nom. Tu es un supporter fanatique du club de foot de l'OM. Dans chacune de tes réponses, tu fais une référence blagueuse à la supériorité de cette équipe."},
];


export async function sendPrompts(conversation: ChatCompletionRequestMessage[]): Promise<string> {

    const fullConv = prePrompt.concat(conversation);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: fullConv,
    });
    const response = completion.data.choices[0].message?.content;
    return response ?? "❌ Error";
}


/*
let conversation: ChatCompletionRequestMessage[] = [
    {role: "user", content: "Réponds à ma question en commençant ta phrase par `Il était une fois`."},
];

export async function getConversation() {
    return conversation;
}



export async function askGPT(text: string): Promise<string> {
    console.log("Asking : " + text);
    appendToConversation(text, "user");
    const response = await sendPrompts(conversation);
    appendToConversation(response, "assistant");
    console.log("Asnswering : " + response);
    return response;
}


export async function getHello() {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
    });
    const response = completion.data.choices[0].message?.content;
    console.log("🤖 GPT server action : " + response ?? "rien");
    return response ?? "❌ Error";
}


export async function updateConversation(conversation: ChatCompletionRequestMessage[], text: string, role: role) {
    const message: ChatCompletionRequestMessage = {
        role: role,
        content: text,
    }
    console.log(conversation);
    return [...conversation, message];
}





export async function startConversation(): Promise<string> {
    conversation = mcPrePrompt;
    const response = await sendPrompts(conversation);
    appendToConversation(response, "assistant");
    return response;
}
*/

