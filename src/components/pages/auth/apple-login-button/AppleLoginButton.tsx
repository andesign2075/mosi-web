import { AppleIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './apple-login-button.module.scss';

const AppleLoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      <AppleIcon />
      <Text.Title variant={14}>Apple로 시작하기</Text.Title>
    </button>
  );
};

export default AppleLoginButton;
