import COLORS from '@/styles/ui/_theme.module.scss';
import { HeartIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-mini-card.module.scss';

const ChallengeReviewMiniCard: React.FC = () => {
  const DUMMY_DATA = {
    image:
      'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
    title: '1만보 걷기',
    joinedCount: 324,
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.challenge__info__img}
        src={DUMMY_DATA.image}
        width={167}
        height={271}
        sizes="100vw"
        alt="카드 이미지"
      />
      <div className={styles.top__text__info}>
        <HeartIcon fill={COLORS.GRAY_300} />
        <Text.Body variant={14}>12</Text.Body>
      </div>
      <div className={styles.bottom__text__info}>
        <Text.Title variant={14}>0702 건강을위한 걷기 참가 하고 오운완~</Text.Title>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default ChallengeReviewMiniCard;
