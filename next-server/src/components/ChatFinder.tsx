"use client"
import React, { useState ,useEffect} from "react";
import axios from "axios";
import Link from 'next/link';
import { Message } from "ai";

type Props = { email:String};

const ChatComp = ({ email}: Props) => {
  const [data,setdata]=useState([])
  const [time,settime]=useState([])
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response1 = await axios.post('http://127.0.0.1:5000/email_find', { email });
        const messages1= response1.data;
        console.log(messages1['array'])
        console.log(messages1['time'])
        setdata(messages1['array'])
        settime(messages1['time'])
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
      {data.filter(number => number !== -1).map((message1,index) => {
        return (
            <Link href={`/dashboard?id=${message1}`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Chat Id: {message1} Time:{time[index]}</Link>
        )})}
        </div>
  );
};

export default ChatComp;