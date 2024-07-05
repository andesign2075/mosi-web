import { GoogleIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './google-login-button.module.scss';

const GoogleLoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      <GoogleIcon />
      <Text.Title variant={14}>Google로 시작하기</Text.Title>
    </button>
  );
};

export default GoogleLoginButton;
