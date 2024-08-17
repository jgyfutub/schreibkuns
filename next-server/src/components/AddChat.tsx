"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
type Props = { email: String };
const AddChat = ({ email }: Props) => {
  // useEffect(()=>{
    function convertUnixToDateTime(unixTimestamp: number): string{
      // Convert the Unix timestamp to milliseconds (Unix timestamp is in seconds)
      const date = new Date(unixTimestamp * 1000);
      
      // Get day, month, year, and time from the Date object
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const time = date.toLocaleTimeString();
  
      // Return the formatted date
      return `${day} ${month} ${year} ${time}`;
  }
  const [isClicked, setIsClicked] = useState(false);
  const [data,setdata]=useState([])
  const [warn,setwarn]=useState("")
  useEffect(()=>{
    const fetchMessages = async () => {
      try {
      const response1 = await axios.post('http://127.0.0.1:5000/email_find', { email });
      const messages1= response1.data;
      setdata(messages1['array'])
      console.log(messages1['array'].filter((num:Number) => num === -1).length)
      if (messages1['array'].filter((num:Number) => num === -1).length<=1535){
        setwarn("warn")
      }}catch(error){
        console.error('Error submitting the form:', error);
      }
    }
    fetchMessages()
  },[email])
  const handleChat = async () => {
    setIsClicked(true)
    try {
      // const response1 = await axios.post('http://127.0.0.1:5000/email_find', { email });
      // const messages1= response1.data;
      // setdata(messages1['array'])
      // console.log(data)
      // if (data.filter(num => num === -1).length<=1535){
      const response = await axios.post('http://127.0.0.1:5000/add_chat', { email },);
      console.log('Server response:', response.data);
      // else{
      //   setwarn("warn")
      
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setIsClicked(false)
    }
  }
  //   handleChat()ß
  // },[email])
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {warn=="warn"?<div style={{color:'red',marginTop:20}}> Upgrade for further chats!!!</div>:<Button onClick={handleChat} className="px-20 my-10">Create New Chat+</Button>
      }
        {/* <Button onClick={handleChat} className="px-20 my-10">Create New Chat+</Button> */}

      </div>
      {isClicked &&
        <div role="status" style={{ display: 'flex', justifyContent: 'center',  }}>
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>}
    </div>
  )
}
export default AddChat
