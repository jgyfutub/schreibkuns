"use client"
import React, { useState ,useEffect} from "react";
// import { Input } from "./ui/input";
import { useChat } from "ai/react";
// import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const [data,setdata]=useState<Message[]>([])
  useEffect(() => {
    // Function to fetch messages
    const fetchMessages = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/get-messages', { chatId });
        const messages = response.data;
        console.log(messages);
        setdata(messages.chats); // Assuming response.data has a structure like { chats: [...] }
      } catch (error) {
        console.error('There was an error fetching the messages!', error);
      }
    };

    // Call the function
    fetchMessages();
  }, [chatId]); 
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });
  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div
      className="relative max-h-screen overflow-scroll"
      id="message-container"
    >
      {/* header */}
      <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
        <h3 className="text-xl font-bold">Chat</h3>
      </div>

      {/* message list */}
      <MessageList messages={data} isLoading={false} />
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
      >
        <div className="flex">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full"
          />
          <button className="bg-blue-600 ml-2">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;