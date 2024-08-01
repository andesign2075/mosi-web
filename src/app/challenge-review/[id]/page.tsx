'use client';

import { ChallengeReviewBottomNavigation, ChallengeReviewSummaryInfo } from '@/components/pages/challenge';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import COLORS from '@/styles/ui/_theme.module.scss';
import ChallengeReviewInfoBottomSheet from '@/components/pages/challenge/challenge-review-info-bottomsheet/ChallengeReviewInfoBottomSheet';
import { EllipsisVerticalIcon } from '@/assets/icons';
import { Header } from '@/components/common';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from './challenge-review-detail.module.scss';
import { useWindowSize } from '@/hooks/useWindowSize';

const MOCK_DATA = [
  {
    id: 1,
    thumbnail:
      'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
  },
  {
    id: 2,
    thumbnail:
      'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/0c680682-2040-4f9b-ae3b-5a8754f9c96b/nike-run-club-app.jpg',
  },
  {
    id: 3,
    thumbnail:
      'https://static.nike.com/a/images/w_1536,c_limit/5f738df9-453d-4bdc-b5b5-9f93ff6c4422/nike-run-club-%EC%95%B1%EC%9D%84-%ED%8C%8C%ED%8A%B8%EB%84%88-%EC%95%B1-%EB%B0%8F-%EA%B8%B0%EA%B8%B0%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%97%B0%EA%B2%B0%ED%95%98%EB%82%98%EC%9A%94-%EB%82%98%EC%9D%B4%ED%82%A4-%EA%B3%A0%EA%B0%9D%EC%84%BC%ED%84%B0.jpg',
  },
];

const ChallengeReviewDetail: NextPage = () => {
  const windowSize = useWindowSize();
  const [currentBottomTab, setCurrentBottomTab] = useState<'CONTENT' | 'INFO'>();

  const imgHeight = windowSize ? windowSize.height - 64 - 74 : 0;

  if (!windowSize) {
    return <></>;
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
      >
        {MOCK_DATA.map((ele, idx) => (
          <SwiperSlide key={idx} className={`${styles.image__wrapper}`}>
            <Image
              src={ele.thumbnail}
              width={windowSize.width}
              height={imgHeight}
              className={styles.thumbnail}
              alt={''}
            />
            {!currentBottomTab ? <ChallengeReviewSummaryInfo /> : null}
          </SwiperSlide>
        ))}
      </Swiper>
      {currentBottomTab ? (
        <ChallengeReviewInfoBottomSheet currentSection={currentBottomTab} onClick={setCurrentBottomTab} />
      ) : (
        <ChallengeReviewBottomNavigation onClick={setCurrentBottomTab} />
      )}
    </>
  );
};

export default ChallengeReviewDetail;
