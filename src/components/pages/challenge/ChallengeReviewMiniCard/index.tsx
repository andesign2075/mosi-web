import COLORS from '@/styles/ui/_theme.module.scss';
import { ChallengeReviewData } from '@/types/review';
import { HeartIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-mini-card.module.scss';
import { useRouter } from 'next/navigation';

interface Props {
  data: ChallengeReviewData;
}
const ChallengeReviewMiniCard = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.push('/challenge-review/1')}>
      <Image
        className={styles.challenge__info__img}
        src={data.imageUrl}
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
        <Text.Title variant={14}>{data.title}</Text.Title>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default ChallengeReviewMiniCard;
