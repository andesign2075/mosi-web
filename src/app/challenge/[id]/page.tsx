'use client';

import React, { useState } from 'react';

import { AngleIcon } from '@/assets/icons';
import ChallengeInfoRow from '@/components/pages/challenge/challenge-info-row/ChallengeInfoRow';
import Image from 'next/image';
import { JoinedCountBadge } from '@/components/pages';
import { Text } from '@/components/common';
import styles from './challenge.module.scss';

const MOCK_DATA = {
  id: 1,
  title: '1만보 걷기',
  thumbnail:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
};
const ChallengeDetailPage = () => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.thumbnail__wrapper}>
          <Image width={0} height={0} sizes="100vw" className={styles.thumbnail} src={MOCK_DATA.thumbnail} alt={''} />
          <Text.Title variant={24} className={styles.title}>
            {MOCK_DATA.title}
          </Text.Title>
        </div>
        <section className={styles.info__section}>
          <Text.Title variant={18} className={styles.section__title}>
            챌린지 정보
          </Text.Title>
          <JoinedCountBadge count={12} />
          <div className={styles.info__row__wrapper}>
            <ChallengeInfoRow label="조건" value="주1회" />
            <ChallengeInfoRow label="기간" value="2주동안(시작일 기준)" />
            <ChallengeInfoRow label="상금" value="2,000원 예상" />
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
          <button className={styles.review__button}>
            <Text.Title variant={16}>리뷰 2,234개 모두 보기</Text.Title>
          </button>
        </section>
        <div className={styles.divider} />
        {/* detail section */}
        <section className={styles.detail__section}>
          <div className={isDetailOpen ? styles.detail__open__container : styles.detail__container}>
            {isDetailOpen ? <div className={styles.detail__img__gradient} /> : null}
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
          <Text.Title variant={18}>돈을 걸면 무조건 하게 됩니다.</Text.Title>
          <Text.Body variant={16}>
            나를 움직이는 강력한 알람, 돈! <br />
            챌린지 시작 전 예치금을 걸어두세요. <br />
            80% 이상만 성공해도 예치금을 그대로 돌려받을 수 있어요! 혼자만의 결심으로 하기 힘든 일이라면 돈을 걸고
            챌린지를 시작해보세요
          </Text.Body>
        </section>
        <div className={styles.divider} />
      </div>
      <div className={styles.cta__container}>
        <button className={styles.cta__button}>
          <Text.Title variant={16}>참가하기</Text.Title>
        </button>
      </div>
    </>
  );
};

export default ChallengeDetailPage;
