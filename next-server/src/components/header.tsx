import { UserButton,SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

export default async function Header() {
//   const { userId } = auth();
const { userId } : { userId: string | null } = auth();

// this is a comment.

  return (
    <div className='bg-gray-600 text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/'>Home</Link>
        <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              <Link href='/dashboard'>Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}