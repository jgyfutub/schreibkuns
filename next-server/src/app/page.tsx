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
  // useEffect(() => {
  const email=user.emailAddresses[0].emailAddress
  axios.post('http://127.0.0.1:5000/email_entry', { email })
  console.log(1)
  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
      <h1 className='text-4xl font-bold'>Welcome {user.firstName} {user.emailAddresses[0].emailAddress}</h1>
      <h1>Your Chatlist</h1>
      <button>Chat1</button>
      <button>Chat2</button>
      {/* <p>{messages}</p> */}
    </div>
  )
}
