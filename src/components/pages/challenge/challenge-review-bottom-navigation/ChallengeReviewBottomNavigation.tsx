import { FilmIcon, LogIcon } from '@/assets/icons';

import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-bottom-navigation.module.scss';

const ChallengeReviewBottomNavigation: React.FC<{
  onClick: React.Dispatch<React.SetStateAction<'CONTENT' | 'INFO' | undefined>>;
}> = ({ onClick }) => {
  return (
    <div className={styles.bottom__container}>
      <div onClick={() => onClick('CONTENT')}>
        <LogIcon />
        <Text.Body variant={12} className={styles.bottom__text}>
          내용
        </Text.Body>
      </div>
      <div onClick={() => onClick('INFO')}>
        <FilmIcon />
        <Text.Body variant={12} className={styles.bottom__text}>
          챌린지 정보
        </Text.Body>
      </div>
    </div>
  );
};

export default ChallengeReviewBottomNavigation;
