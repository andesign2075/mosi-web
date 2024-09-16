'use client';

import { AngleIcon, EllipsisVerticalIcon } from '@/assets/icons';
import { ChallengeInfoRow, JoinedCountBadge } from '@/components/pages/challenge';
import { Header, Text } from '@/components/common';
import React, { useState } from 'react';

import COLORS from '@/styles/ui/_theme.module.scss';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from './challenge.module.scss';
import { useGetChallengeDetail } from '@/queries/challenge';
import { useRouter } from 'next/navigation';

const MOCK_DATA = {
  thumbnail:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
};

interface Props {
  params: {
    id: string;
  };
}
const ChallengeDetailPage: NextPage<Props> = ({ params }) => {
  const router = useRouter();
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const { data } = useGetChallengeDetail(params.id);

  const detailData = data?.data[0];
  console.log(detailData);

  if (!detailData) {
    return null;
  }

  return (
    <>
      <Header
        circleBackButton
        headerRight={
          <button>
            <EllipsisVerticalIcon fill={COLORS.GRAY_WHITE} />
          </button>
        }
      />
      <div className={styles.container}>
        <div className={styles.thumbnail__wrapper}>
          <Image width={0} height={0} sizes="100vw" className={styles.thumbnail} src={MOCK_DATA.thumbnail} alt={''} />
          <Text.Title variant={24} className={styles.title}>
            {detailData.title}
          </Text.Title>
        </div>
        <section className={styles.info__section}>
          <Text.Title variant={18} className={styles.section__title}>
            챌린지 정보
          </Text.Title>
          <JoinedCountBadge count={12} />
          <div className={styles.info__row__wrapper}>
            <ChallengeInfoRow label="조건" value={`주${detailData.weeklyFrequency}회`} />
            <ChallengeInfoRow label="기간" value={`${detailData.periodWeeks}주동안(시작일 기준)`} />
            <ChallengeInfoRow label="상금" value={`${Number(detailData.prizeAmount).toLocaleString()}원 예상`} />
          </div>
        </section>
        <div className={styles.divider} />
        {/* review section */}
        <section className={styles.review__section}>
          <div className={styles.section__title}>
            <Text.Title variant={18}>참가자 리뷰</Text.Title>
            <Text.Title variant={14} className={styles.section__title__participant}>
              누적 참가자 2,234명
            </Text.Title>
          </div>
          <div className={styles.review__container}>
            <Image
              width={135}
              height={205}
              sizes="100vw"
              className={styles.review__img}
              src={MOCK_DATA.thumbnail}
              alt={'참가자리뷰'}
            />
          </div>
          <button className={styles.review__button} onClick={() => router.push('/challenge-review')}>
            <Text.Title variant={16}>리뷰 2,234개 모두 보기</Text.Title>
          </button>
        </section>
        <div className={styles.divider} />
        {/* detail section */}
        <section className={styles.detail__section}>
          <div className={isDetailOpen ? styles.detail__open__container : styles.detail__container}>
            {!isDetailOpen ? <div className={styles.detail__img__gradient} /> : null}
            <div className={styles.detail__img}>
              <Image fill src={MOCK_DATA.thumbnail} alt={'상세 이미지'} />
            </div>
          </div>
          <div className={styles.detail__more__button__container}>
            <button className={styles.detail__more__button} onClick={() => setIsDetailOpen(!isDetailOpen)}>
              <Text.Title variant={16}>상세정보 더보기</Text.Title>
              <AngleIcon />
            </button>
          </div>
        </section>
        <div className={styles.divider} />
        {/* context */}
        <section className={styles.context__section}>
          <Text.Title variant={18}>{detailData.title}</Text.Title>
          <Text.Body variant={16}>{detailData.contents}</Text.Body>
        </section>
        <div className={styles.divider} />
      </div>
      <div className={styles.cta__container}>
        <button className={styles.cta__button} onClick={() => router.push(`/challenge-apply/${params.id}`)}>
          <Text.Title variant={16}>참가하기</Text.Title>
        </button>
      </div>
    </>
  );
};

export default ChallengeDetailPage;
