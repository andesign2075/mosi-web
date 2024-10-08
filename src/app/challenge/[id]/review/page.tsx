'use client';

import { ChallengeReviewMiniCard, JoinedCountBadge } from '@/components/pages/challenge';
import { Header, Text } from '@/components/common';

import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import styles from './challenge-review.module.scss';
import { useGetChallengeDetail } from '@/queries/challenge';
import useGetChallengeReview from '@/queries/review/useGetChallengeReview';

interface Props {
  params: {
    id: string;
  };
}

const ChallengeReview: NextPage<Props> = ({ params }) => {
  const { data: challengeData } = useGetChallengeDetail(params.id);

  const { data: reviewData } = useGetChallengeReview({ challengeId: params.id });

  if (!challengeData) {
    return null;
  }

  return (
    <>
      <Header headerTitle="리뷰 모두 보기" />
      <div className={styles.container}>
        <div className={styles.challenge__info__container}>
          <Image
            className={styles.challenge__info__img}
            src={challengeData?.data[0].thumbnailImageUrl}
            width={48}
            height={48}
            alt="카드 이미지"
          />
          <div className={styles.challenge__info__right}>
            <Text.Body variant={16} className={styles.challenge__info__title}>
              {challengeData?.data[0].title}
            </Text.Body>
            <JoinedCountBadge count={challengeData?.data[0].participantCount} />
          </div>
        </div>
        <section className={styles.review__section}>
          <Text.Title variant={18} className={styles.review__section__label}>
            리뷰 ({reviewData?.totalElements})
          </Text.Title>
          <div className={styles.review__list__container}>
            <div className={styles.review__list__inner__container}>
              {reviewData?.data.map((ele) => <ChallengeReviewMiniCard data={ele} />)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChallengeReview;
