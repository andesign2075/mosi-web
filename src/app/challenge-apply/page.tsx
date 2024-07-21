import { OfficialBadge, Text } from '@/components/common';

import COLORS from '@/styles/ui/_theme.module.scss';
import { CalendarIcon } from '@/assets/icons';
import Image from 'next/image';
import { JoinedCountBadge } from '@/components/pages';
import { NextPage } from 'next';
import React from 'react';
import styles from './challenge-apply.module.scss';

const MOCK_DATA = {
  id: 1,
  title: '1만보 걷기',
  thumbnail:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
};
const page: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.challenge__info__section}>
          <Image
            width={135}
            height={205}
            sizes="100vw"
            className={styles.thumbnail}
            src={MOCK_DATA.thumbnail}
            alt={'참가자리뷰'}
          />
          <div className={styles.challenge__info}>
            <div>
              <OfficialBadge />
              <Text.Title variant={18} className={styles.challenge__info__title}>
                {MOCK_DATA.title}
              </Text.Title>
              <div className={styles.info__wrapper}>
                <Text.Body className={styles.info__badge} variant={14}>
                  주1회
                </Text.Body>
                <Text.Body className={styles.info__badge} variant={14}>
                  2주동안
                </Text.Body>
              </div>
              <div className={styles.date}>
                <CalendarIcon fill={COLORS.GRAY_800} />
                <Text.Body variant={12}>6.17(월) ~ 6.30(일)</Text.Body>
              </div>
            </div>
            <JoinedCountBadge count={23} />
          </div>
        </section>
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
