"use client"
import React, { useEffect } from "react";
import axios from "axios";
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
        <button onClick={handleChat}>Create New Chat+</button>
    )
}
export default AddChat
