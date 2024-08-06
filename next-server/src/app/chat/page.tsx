
import ChatComp from '@/components/ChatFinder';
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import axios from 'axios'
import AddChat from '@/components/AddChat';
export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }
  return (
    <div className='mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
      <h1 className='text-4xl font-bold'>Your Chat Lists</h1>
      <ChatComp email={user.emailAddresses[0].emailAddress}/>
      <AddChat email={user.emailAddresses[0].emailAddress}/>
    </div>

  );
}