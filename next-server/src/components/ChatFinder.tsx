"use client"
import React, { useState ,useEffect} from "react";
import axios from "axios";
import Link from 'next/link';
import { Message } from "ai";

type Props = { email:String};
function UnixTimeToDateTime(unixTimestamp: number): string{
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);

  // You can format the date as needed using methods like:
  const formattedDate = dateObject.toLocaleString(); // Local format

  return formattedDate;
}
const ChatComp = ({ email}: Props) => {
  const [data,setdata]=useState([])
  const [time,settime]=useState([])
  const [warn,setwarn]=useState("")
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response1 = await axios.post('https://schreibkuns-1.onrender.com/email_find', { email });
        const messages1= response1.data;
        console.log(messages1['array'])
        console.log(messages1['time'])
        setdata(messages1['array'])
        settime(messages1['time'])
      } catch (error) {
        console.error('There was an error fetching the messages!', error);
      }
    };
    fetchMessages()
    // const a
    const count = data.filter(num => num === -1).length;
    if (count>=1536){
      setwarn("warn")
    }
  }, [email]); 

  const handleChat=(e: React.ChangeEvent<any>)=>{
    console.log(e.target.value)
  }
  return (
    <div className="flex flex-col gap-2 px-4">
      {data.filter(number => number !== -1).map((message1,index) => {
        return (
          <div style={{display:'grid',width:320,marginTop:20}} key={index}>
            <span style={{textAlign:'right',fontSize:10}}>{UnixTimeToDateTime(time[index])}</span>
            <Link href={`/dashboard?id=${message1}`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Chat Id: {message1} </Link>
            </div>
        )})}
        </div>
  );
};

export default ChatComp;