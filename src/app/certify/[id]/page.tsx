'use client';

import { CertifyCard, ChallengeSummarySection } from '@/components/pages/challenge';
import { Header, Text } from '@/components/common';
import { usePathname, useRouter } from 'next/navigation';

import { CheckCircleIcon } from '@/assets/icons';
import React from 'react';
import styles from './certify-detail.module.scss';
import { useGetChallengeDetail } from '@/queries/challenge';

interface Props {
  id: string;
}

const CertifyDetail = ({ id }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { data } = useGetChallengeDetail(id);
  const detailData = data?.data[0];

  if (!detailData) {
    return null;
  }

  return (
    <>
      <Header variant="light" headerTitle="인증하기" />
      <div className={styles.container}>
        <ChallengeSummarySection
          thumbnailImageUrl={detailData.thumbnailImageUrl}
          title={detailData.title}
          periodWeeks={detailData.periodWeeks}
          weeklyFrequency={detailData.weeklyFrequency}
          startDate={detailData.startDate}
          endDate={detailData.endDate}
          participantCount={detailData.participantCount}
        />
        <div className={styles.divider} />
        <section className={styles.certify__section}>
          <div className={styles.certify__section__title__row}>
            <Text.Title variant={18}>인증(6/14)</Text.Title>
            <button className={styles.certify__history__button} onClick={() => router.push('/certify/1/history')}>
              <CheckCircleIcon />
              <Text.Title variant={14}>인증현황</Text.Title>
            </button>
          </div>
          <CertifyCard onClick={() => router.push(`${pathname}/register`)} />
        </section>
      </div>
    </>
  );
};

export default CertifyDetail;
