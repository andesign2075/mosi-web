import { AngleIcon } from '@/assets/icons';
import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';
import { Text } from '@/components/common';
import styles from './certify_available_button.module.scss';

function CertifyAvailableButton() {
  return (
    <button className={styles.container}>
      <Text.Title variant={16}>인증 가능한 회차가 있어요</Text.Title>
      <AngleIcon transform="rotate(-90)" fill={COLORS.SEMENTIC_PRIMARY} />
    </button>
  );
}

export default CertifyAvailableButton;
