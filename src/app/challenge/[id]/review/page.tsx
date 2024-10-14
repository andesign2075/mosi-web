'use client';

import { ChallengeReviewBottomNavigation, ChallengeReviewSummaryInfo } from '@/components/pages/challenge';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import COLORS from '@/styles/ui/_theme.module.scss';
import { ChallengeReviewData } from '@/types/review';
import ChallengeReviewInfoBottomSheet from '@/components/pages/challenge/ChallengeReviewInfoBottomSheet';
import { EllipsisVerticalIcon } from '@/assets/icons';
import { Header } from '@/components/common';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from './challenge-review-detail.module.scss';
import { useGetChallengeDetail } from '@/queries/challenge';
import useGetChallengeReview from '@/queries/review/useGetChallengeReview';
import { useWindowSize } from '@/hooks/useWindowSize';

interface Props {
  params: {
    id: string;
  };
}

const ChallengeReviewDetail: NextPage<Props> = ({ params }) => {
  const { data: challengeData } = useGetChallengeDetail(params.id);
  const { data: reviewData } = useGetChallengeReview({ challengeId: params.id });

  const windowSize = useWindowSize();
  const [currentBottomTab, setCurrentBottomTab] = useState<'CONTENT' | 'INFO'>();
  const [currentReview, setCurrentReview] = useState<ChallengeReviewData>();

  const imgHeight = windowSize ? windowSize.height - 64 - 74 : 0;

  useEffect(() => {
    setCurrentReview(reviewData?.data[0]);
  }, []);

  if (!windowSize || !challengeData || !reviewData || !currentReview) {
    return null;
  }
  return (
    <>
      <Header
        headerRight={
          <button>
            <EllipsisVerticalIcon fill={COLORS.GRAY_WHITE} />
          </button>
        }
      />

      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        className={`mySwiper ${styles.container}`}
        style={{ height: imgHeight }}
        onSlideChange={(e) => setCurrentReview(reviewData.data[e.activeIndex])}
      >
        {reviewData?.data.map((ele) => (
          <SwiperSlide key={ele.id} className={`${styles.image__wrapper}`}>
            <Image src={ele.imageUrl} layout="fill" className={styles.thumbnail} alt={'챌린지 리뷰 이미지'} />
            {!currentBottomTab ? <ChallengeReviewSummaryInfo challenge={challengeData?.data[0]} review={ele} /> : null}
          </SwiperSlide>
        ))}
      </Swiper>
      {currentBottomTab ? (
        <ChallengeReviewInfoBottomSheet
          currentSection={currentBottomTab}
          onClick={setCurrentBottomTab}
          challenge={challengeData?.data[0]}
          review={currentReview}
        />
      ) : (
        <ChallengeReviewBottomNavigation onClick={setCurrentBottomTab} />
      )}
    </>
  );
};

export default ChallengeReviewDetail;
