'use client';

import { AppleLoginButton, GoogleLoginButton, KakaoLoginButton } from '@/components/pages/auth';
import React, { useCallback, useEffect } from 'react';

import { NextPage } from 'next';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';

interface Props {
  searchParams: {
    token?: string;
  };
}
const LoginPage: NextPage<Props> = ({ searchParams }) => {
  const router = useRouter();
  const onKakaoLogin = useCallback(() => {
    // SDK는 한 번만 초기화
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      // 로그인 요청
      window.Kakao.Auth.authorize({
        redirectUri: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/code/kakao`,
        scope: 'name,profile_image,phone_number,account_email',
        prompt: 'select_account',
        throughTalk: true,
      });
    }
  }, []);

  const onGoogleLogin = useCallback(() => {
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_API_URL}/login/oauth2/code/google&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
    window.location.href = url;
  }, []);

  const onAppleLogin = useCallback(() => {}, []);

  useEffect(() => {
    if (searchParams.token) {
      localStorage.setItem('accessToken', searchParams.token);
      router.replace('/home');
    }
  }, []);

  return (
    <div className={styles.button__container}>
      <KakaoLoginButton onClick={onKakaoLogin} />
      <GoogleLoginButton onClick={onGoogleLogin} />
      <AppleLoginButton onClick={onAppleLogin} />
    </div>
  );
};

export default LoginPage;
