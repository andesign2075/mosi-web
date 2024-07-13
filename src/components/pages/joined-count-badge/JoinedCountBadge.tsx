import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';
import { Text } from '@/components/common';
import { UserIcon } from '@/assets/icons';
import styles from './joined-count-badge.module.scss';

const JoinedCountBadge: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className={styles.join__count__badge__container}>
      <div className={styles.join__count__badge}>
        <UserIcon fill={COLORS.GRAY_800} />
        <Text.Title variant={14}>{count}명 참가중</Text.Title>
      </div>
    </div>
  );
};

export default JoinedCountBadge;
