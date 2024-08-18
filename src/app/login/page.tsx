'use client';

import { AppleLoginButton, GoogleLoginButton, KakaoLoginButton } from '@/components/pages/auth';
import React, { useCallback } from 'react';

import { signIn } from 'next-auth/react';
import styles from './login.module.scss';

const LoginPage: React.FC = () => {
  const onKakaoLogin = useCallback(() => {
    // SDK는 한 번만 초기화
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      // 로그인 요청
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8080/oauth2/code/kakao',
        scope: 'profile_nickname,profile_image,phone_number,account_email',
        prompt: 'select_account',
        throughTalk: true,
      });
    }
  }, []);

  const onGoogleLogin = useCallback(() => {
    signIn('google');
  }, []);

  const onAppleLogin = useCallback(() => {}, []);

  return (
    <div className={styles.button__container}>
      <KakaoLoginButton onClick={onKakaoLogin} />
      <GoogleLoginButton onClick={onGoogleLogin} />
      <AppleLoginButton onClick={onAppleLogin} />
    </div>
  );
};

export default LoginPage;
