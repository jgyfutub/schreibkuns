"use client"
import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "./ui/button";
type Props = { email:String};
const AddChat=({ email}: Props)=>{
    // useEffect(()=>{
const handleChat=async ()=>{
    try {
      const response = await axios.post('http://127.0.0.1:5000/add_chat', {email}, );
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  }
//   handleChat()ß
    // },[email])
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button onClick={handleChat} className="px-20 my-10">Create New Chat+</Button>
      </div>
    )
}
export default AddChat
