import { KakaoIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './kakao-login-button.module.scss';

const KakaoLoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      <KakaoIcon />
      <Text.Title variant={14}>카카오톡으로 시작하기</Text.Title>
    </button>
  );
};

export default KakaoLoginButton;
