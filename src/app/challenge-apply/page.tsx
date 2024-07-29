import { Header, Text } from '@/components/common';

import ChallengeSummarySection from '@/components/pages/challenge/challenge-summary-section/ChallengeSummarySection';
import { NextPage } from 'next';
import React from 'react';
import styles from './challenge-apply.module.scss';

const page: NextPage = () => {
  return (
    <>
      <Header variant="light" headerTitle="참가하기" />
      <div className={styles.container}>
        <ChallengeSummarySection />
        <div className={styles.divider} />
        <section className={styles.price__info__section}>
          <Text.Title variant={18}>도전 금액 설정</Text.Title>
          <Text.Body variant={14}>도전 금액 설정</Text.Body>

          <div className={styles.price__card}>
            <Text.Title variant={18} className={styles.price__card__title}>
              도전 금액
            </Text.Title>
            <div className={styles.price__input__container}>
              <input type="text" className={styles.price__input} />
              <Text.Title variant={24}>원</Text.Title>
              <button className={styles.price__change__button}>
                <Text.Body variant={12}>변경</Text.Body>
              </button>
            </div>
            <div className={styles.price__info__main__row}>
              <Text.Title variant={16}>100% 성공</Text.Title>
              <Text.Title variant={16}>
                <small>(예상)</small>10,001~10,103원
              </Text.Title>
            </div>
            <div className={styles.price__info__sub__row}>
              <Text.Body variant={16}>80% 이상 성공</Text.Body>
              <Text.Body variant={16}>10,000원</Text.Body>
            </div>
            <div className={styles.price__info__sub__row}>
              <Text.Body variant={16}>80% 미만 성공</Text.Body>
              <Text.Body variant={16}>예치금 일부 환급(진행률 기준)</Text.Body>
            </div>
          </div>
        </section>
        <div className={styles.divider} />
        <section className={styles.pay__section}>
          <Text.Title variant={18}>예치금 사용 및 결제</Text.Title>

          <div className={styles.pay__info}>
            <Text.Title variant={16} className={styles.pay__info__title}>
              내 예치금
            </Text.Title>
            <div className={styles.pay__info__row}>
              <Text.Body variant={16}>도전 금액</Text.Body>
              <Text.Title variant={16}>-10,000원</Text.Title>
            </div>
            <div className={styles.pay__info__row}>
              <Text.Body variant={16}>현재 보유중인 예치금</Text.Body>
              <Text.Body variant={16}>- 525원</Text.Body>
            </div>
            <div className={styles.pay__info__sum__row}>
              <Text.Title variant={16} className={styles.pay__info__sum__label}>
                충전 필요 금액
              </Text.Title>
              <Text.Title variant={18} className={styles.pay__info__sum__value}>
                9,475원
              </Text.Title>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.cta__container}>
        <button>
          <Text.Title variant={16}>9,475원 충전하고 참가완료</Text.Title>
        </button>
      </div>
    </>
  );
};

export default page;
