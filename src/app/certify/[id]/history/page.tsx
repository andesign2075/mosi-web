'use client';

import 'react-calendar/dist/Calendar.css';

import { Header, Text } from '@/components/common';
import React, { useState } from 'react';

import Calendar from 'react-calendar';
import { CertifyCard } from '@/components/pages/challenge';
import { NextPage } from 'next';
import dayjs from 'dayjs';
import styles from './certify-detail-history.module.scss';
import useGetCertifyHistory from '@/queries/review/useGetChallengeReview';

const MOCK_DATA = {
  progress: 20,
  certifyCount: 1,
  failCount: 3,
  remainCount: 10,
  startDate: '2024-08-24',
  endDate: '2024-08-30',
};

interface Props {
  params: {
    id: string;
  };
}
const CertifyDetailHistory: NextPage<Props> = ({ params }) => {
  const [value] = useState(dayjs().format());

  const { data } = useGetCertifyHistory({ challengeId: params.id });

  return (
    <>
      <Header variant="light" headerTitle="인증현황" />
      <div className={styles.container}>
        <section>
          <div className={styles.title__container}>
            <Text.Title variant={16}>진행률</Text.Title>
            <Text.Title variant={24} className={styles.progress}>
              20%
            </Text.Title>
          </div>
          <div className={styles.progress__container}>
            <div className={styles.progress__inner_container} style={{ width: `${MOCK_DATA.progress}%` }} />
          </div>
          <div className={styles.info__container}>
            <div>
              <Text.Body variant={18}>내 인증 회수</Text.Body>
              <Text.Title variant={18}>{MOCK_DATA.certifyCount}</Text.Title>
            </div>
            <div>
              <Text.Body variant={18}>실패 회수</Text.Body>
              <Text.Title variant={18}>{MOCK_DATA.certifyCount}</Text.Title>
            </div>
            <div>
              <Text.Body variant={18}>남은 회수</Text.Body>
              <Text.Title variant={18}>{MOCK_DATA.certifyCount}</Text.Title>
            </div>
          </div>
          <div>
            <Calendar
              locale="ko"
              formatDay={(_locale, date) => dayjs(date).format('D')}
              allowPartialRange={false}
              value={value}
              calendarType="gregory"
              showNeighboringMonth={false}
              next2Label={null} // +1년 & +10년 이동 버튼 숨기기
              prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
              onClickYear={() => null}
              tileClassName={({ date }) => {
                if (
                  dayjs(MOCK_DATA.startDate).diff(dayjs(date), 'days') < 0 &&
                  dayjs(MOCK_DATA.endDate).diff(dayjs(date), 'days') >= 0
                ) {
                  return 'calendar__range';
                }
              }}
            />
          </div>
        </section>
        <section className={styles.certify__card__section}>
          {data?.data.map((ele) => <CertifyCard data={ele} onClick={() => null} />)}
        </section>
      </div>
    </>
  );
};

export default CertifyDetailHistory;
