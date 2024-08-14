
import FileUpload from '@/components/FileUploader';
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import ChatComponent from '@/components/Chats';
// import { useLocation , useParams} from 'react-router-dom';
export default async function DashboardPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams['id'])
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className=' text-start max-w-xl mx-auto p-5 rounded'>
      <h1 className='text-4xl font-bold text-center mb-10'>Chat Id: {searchParams['id']}</h1>
      <div>
      <FileUpload chatid={String(searchParams['id'])} email={user.emailAddresses[0].emailAddress}/>
      <ChatComponent chatId={Number(searchParams['id'])} email={user.emailAddresses[0].emailAddress}/>
      </div>
    </div>
  );
}