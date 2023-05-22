'use client';

import { useState, useRef, useEffect } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { experimental_useOptimistic as useOptimistic } from "react";
import { sendPrompts } from "./OpenaiFunctions";


let initialConversation: ChatCompletionRequestMessage[] = [];

export default function Conversation() {

    const [conversation, setConversation] = useState(initialConversation);
    function optimisticFunction(state: ChatCompletionRequestMessage[], newMessage: ChatCompletionRequestMessage) {
        return ([...state, newMessage]);
    }
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(conversation, optimisticFunction);

    const formRef = useRef<HTMLFormElement>(null);
    
    // Scroll to bottom when new message
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        messagesEndRef.current?.scrollTo({
            top: messagesEndRef.current?.scrollHeight,
            behavior: "smooth",
          });
    }, [optimisticMessages]);


    async function sendMessage(formData: FormData) {
        const userMessage = formData.get("textfield")?.toString();
        formRef.current?.reset(); // Delete textfield content
        if (userMessage) {
            // TODO : put user message when onCLick button instead
            addOptimisticMessage({role: "user", content: userMessage});
            const newUserMessage: ChatCompletionRequestMessage = {role: "user", content: userMessage};
            setConversation(prev => [...prev, newUserMessage]);

            addOptimisticMessage({role: "assistant", content: "Chargement de la réponse..."});
            const response = await sendPrompts([...conversation, newUserMessage]);
            const newGptMessage: ChatCompletionRequestMessage = {role: "assistant", content: response};
            setConversation(prev => [...prev, newGptMessage]);
        }
    }


    return (
        <div className="chat-container">

            <div className="conversation" ref={messagesEndRef}>

                <div className="bubble" id="assistant" key="bienvenue">
                    <span>Bonjour, je suis une IA développée par ce génie de Thomas Douche. Posez-moi toutes vos questions.</span>
                </div>

                {optimisticMessages.map((message, index) =>
                    <div className="bubble" id={message.role} key={index.toString()+message.content[0]}>
                        {message.content}
                    </div>
                )}
            </div>

            <form action={sendMessage} className="prompt" ref={formRef}>
                <textarea placeholder="Votre message..." name="textfield" className="textfield"></textarea>
                <button className="send-button">Envoyer</button>
            </form>

        </div>
        
    );
}