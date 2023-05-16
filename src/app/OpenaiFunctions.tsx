"use server";

import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

type role = "system" | "user" | "assistant";

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

let conversation: ChatCompletionRequestMessage[] = [
    {role: "user", content: "Bonjour, qui êtes-vous ?"},
];


export async function getHello() {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
    });
    const response = completion.data.choices[0].message?.content;
    console.log("🤖 GPT server action : " + response ?? "rien");
    return response ?? "❌ Error";
}

function appendToConversation(text: string, role: role) {
    const message: ChatCompletionRequestMessage = {
        role: role,
        content: text,
    }
    conversation.push(message);
}

async function sendPrompts(conversation: ChatCompletionRequestMessage[]): Promise<string> {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
    });
    const response = completion.data.choices[0].message?.content;
    return response ?? "❌ Error";
}

/*
export async function startConversation(): Promise<string> {
    conversation = mcPrePrompt;
    const response = await sendPrompts(conversation);
    appendToConversation(response, "assistant");
    return response;
}
*/

export async function askGPT(text: string): Promise<string> {
    appendToConversation(text, "user");
    const response = await sendPrompts(conversation);
    appendToConversation(response, "assistant");
    return response;
}