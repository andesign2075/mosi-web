'use client';

import { AppleLoginButton, GoogleLoginButton, KakaoLoginButton } from '@/components/pages/auth';
import React, { useCallback } from 'react';

import { signIn } from 'next-auth/react';
import styles from './login.module.scss';

const LoginPage: React.FC = () => {
  const onKakaoLogin = useCallback(async () => {
    const { Kakao } = window;

    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login',
      throughTalk: true,
    }).then(
      Kakao.API.request({
        url: '/v2/user/service_terms',
      }).then((res: any) => console.log(res)),
    );
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
