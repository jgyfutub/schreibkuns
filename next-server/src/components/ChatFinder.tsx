"use client"
import React, { useState ,useEffect} from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from 'next/link';
import { Message } from "ai";

type Props = { email:String};

const ChatComp = ({ email}: Props) => {
  const [data,setdata]=useState([])
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response1 = await axios.post('http://127.0.0.1:5000/email_find', { email });
        const messages1= response1.data;
        console.log(messages1['array'])
        setdata(messages1['array'])
      } catch (error) {
        console.error('There was an error fetching the messages!', error);
      }
    };
    fetchMessages();
  }, [email]); 

  const handleChat=(e: React.ChangeEvent<any>)=>{
    console.log(e.target.value)
  }
  return (
    <div className="flex flex-col gap-2 px-4">
      {data.filter(number => number !== -1).map((message1) => {
        return (
            <Link href={`/dashboard?id=${message1}`}>Chat Id: {message1}</Link>
        )})}
        </div>
  );
};

export default ChatComp;