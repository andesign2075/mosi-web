import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-info-row.module.scss';

const ChallengeInfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <Text.Body variant={16} className={styles.label}>
        {label}
      </Text.Body>
      <Text.Body variant={16} className={styles.value}>
        {value}
      </Text.Body>
    </div>
  );
};

export default ChallengeInfoRow;
