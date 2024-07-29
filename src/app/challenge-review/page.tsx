'use client';

import { ChallengeReviewMiniCard, JoinedCountBadge } from '@/components/pages/challenge';
import { Header, Text } from '@/components/common';

import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import styles from './challenge-review.module.scss';

const DUMMY_DATA = {
  image:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
  title: '1만보 걷기',
  joinedCount: 324,
};

const ChallengeReview: NextPage = () => {
  return (
    <>
      <Header headerTitle="리뷰 모두 보기" />
      <div className={styles.container}>
        <div className={styles.challenge__info__container}>
          <Image
            className={styles.challenge__info__img}
            src={DUMMY_DATA.image}
            width={48}
            height={48}
            alt="카드 이미지"
          />
          <div className={styles.challenge__info__right}>
            <Text.Body variant={16} className={styles.challenge__info__title}>
              1만보 걷기
            </Text.Body>
            <JoinedCountBadge count={324} />
          </div>
        </div>
        <section className={styles.review__section}>
          <Text.Title variant={18} className={styles.review__section__label}>
            리뷰 (2,234)
          </Text.Title>
          <div className={styles.review__list__container}>
            <div className={styles.review__list__inner__container}>
              <ChallengeReviewMiniCard />
              <ChallengeReviewMiniCard />
              <ChallengeReviewMiniCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChallengeReview;
