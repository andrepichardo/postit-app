import Link from 'next/link';
import React from 'react';
import Login from './Login';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Logged from './Logged';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="fixed max-w-4xl w-full rounded-t-lg py-3.5 z-[100] bg-white">
      <nav className="px-2 xs:px-3 md:px-4 2xl:px-6 flex justify-between items-center gap-2 min-h-[45px] h-full">
        <Link href="/">
          <h1 className="text-lg font-bold flex items-center gap-1 text-red-500">
            <Image
              src={Logo}
              className="w-auto h-auto"
              width={30}
              height={30}
              alt=""
              priority
            />
            ThoughtHub
          </h1>
        </Link>
        <ul>
          {!session?.user && <Login />}
          {session?.user && (
            <Logged
              name={session.user?.name}
              image={session.user?.image || ''}
            />
          )}
        </ul>
      </nav>
    </header>
  );
}
