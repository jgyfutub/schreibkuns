// "use client"
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();
  // const [array, setArray] = useState([]);
  if (!userId || !user) {
  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
    </div>
  );}
  // useEffect(() => {
    // Function to fetch messages
    const fetchMessages = async () => {
      try {
        const formData = new FormData();
        formData.append('email',user.emailAddresses[0].emailAddress);
        const response = await axios.post('http://127.0.0.1:5000/email_entry', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const messages = response.data;
        console.log(messages)
        // Assuming response.data has a structure like { chats: [...] }
      } catch (error) {
        console.error('There was an error fetching the messages!', error);
      }
    };

    // Call the function
    fetchMessages();
  // }, [userId]);

  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
      <h1 className='text-4xl font-bold'>Welcome {user.firstName}</h1>
      <h1>Your Chatlist</h1>
      <button>Chat1</button>
      <button>Chat2</button>
      <p>{messages}</p>
    </div>
  )
}
