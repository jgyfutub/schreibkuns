// "use client"
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import axios from 'axios';
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
  try{
  const email=user.emailAddresses[0].emailAddress
  const response2 = await axios.post('http://127.0.0.1:5000/email_entry', { email });
        const messages2= response2.data;
  }catch (error) {
    console.error('There was an error fetching the messages!', error);
  }
  // useEffect(() => {
  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
      <h1 className='text-4xl font-bold'>Welcome {user.firstName}</h1>
      <h1 className='text-4xl font-bold'>About the Application</h1>
      <p>SchreibKuns is an innovative application that enables users to interact with a smart AI-powered bot by simply providing an image. The app seamlessly combines advanced image recognition and natural language processing technologies to generate engaging and insightful conversations based on the visual content. Users can upload or take a photo, and the bot will analyze the image to initiate a meaningful dialogue, offering descriptions, stories, or even answering questions related to the image. SchreibKuns is perfect for creative minds, helping to spark imagination and providing unique perspectives on visual content.</p>
      {/* <p>{messages}</p> */}
    </div>
  )
}
