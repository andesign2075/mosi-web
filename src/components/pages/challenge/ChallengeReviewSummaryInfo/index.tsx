import { ChallengeDetailData } from '@/types/challenge';
import { ChallengeReviewData } from '@/types/review';
import Image from 'next/image';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-summary-info.module.scss';

interface Props {
  challenge: ChallengeDetailData;
  review: ChallengeReviewData;
}

const ChallengeReviewSummaryInfo = ({ challenge, review }: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.member__info__section}>
        <Image
          src={
            'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg'
          }
          width={40}
          height={40}
          className={styles.profile__img}
          alt="profile"
        />
        <Text.Title variant={14}>행복한 김키티</Text.Title>
      </section>
      <Text.Title variant={16} className={styles.context}>
        {review.title}
      </Text.Title>
      <section className={styles.challeng__info__section}>
        <Image
          src={challenge.thumbnailImageUrl}
          width={48}
          height={48}
          className={styles.challeng__info__img}
          alt="profile"
        />
        <div>
          <Text.Body variant={16}>{challenge.title}</Text.Body>
          <Text.Body variant={14}>이 참가자의 도전금액 10,000원</Text.Body>
        </div>
      </section>
    </div>
  );
};

export default ChallengeReviewSummaryInfo;
