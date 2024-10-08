"use client"
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number; email: String };

const ChatComponent = ({ chatId, email }: Props) => {
  const [data, setdata] = useState<Message[]>([])
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    // Function to fetch messages
    console.log(1)
    const fetchMessages = async () => {
      try {
        const response = await axios.post('https://schreibkuns-1.onrender.com/api/get-messages', { chatId, email });
        const messages = response.data;
        console.log(messages);
        setdata(messages.chats);
        const response1 = await axios.post('https://schreibkuns-1.onrender.com/email_find', { email });
        const messages1 = response1.data;
        console.log(messages1)
        // setdata(messages.chats)
      } catch (error) {
        console.error('There was an error fetching the messages!', error);
      }
    };
    fetchMessages();
  }, [chatId, email]);
  console.log(1)
  const a = "hgfds"
  const { input, handleInputChange, handleSubmit, messages, isLoading, stop ,error} = useChat({
    api: "https://schreibkuns-1.onrender.com/api/chat",
    body: {
      chatId,
      email
    },
    initialMessages: data || [],
  });
  console.log(error)
  if(error!=undefined){
    window.location.reload();
  }
  console.log(data, messages, 1)
  console.log(isClicked)
  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  console.log(1)
  return (
    <div
      className="relative max-h-screen overflow-scroll"
      id="message-container"
    >
      {/* header */}
      <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
        <h3 className="text-2xl font-bold text-center">Chats</h3>
      </div>

      {/* message list */}
      <MessageList messages={messages} isLoading={false} />
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
      >
        {isLoading &&
          <div role="status" style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>}
        <div className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full"
          />
          <Button className="bg-blue-600 ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
