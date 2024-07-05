'use client';

import { ReactNode, useEffect } from 'react';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type Props = {
  session?: Session | null;
  children: ReactNode;
};

export default function AuthSession({ session, children }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      }
    }
  }, []);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
