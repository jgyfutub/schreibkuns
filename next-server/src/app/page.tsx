import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
    </div>
  );}
  return (
    <div>
      <h1>text to image online</h1>
      <h1>Schreibkuns</h1>
      <h1 className='text-4xl font-bold'>Welcome {user.firstName}</h1>
    </div>
  )
}
