import React from 'react';
import Text from '../Text';
import styles from './official-badge.module.scss';

const OfficialBadge: React.FC = () => {
  return (
    <Text.Title variant={14} className={styles.badge}>
      모시 공식
    </Text.Title>
  );
};

export default OfficialBadge;
