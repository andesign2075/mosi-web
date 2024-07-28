'use client';

import CertifyCard from '@/components/pages/challenge/certify-card/CertifyCard';
import ChallengeSummarySection from '@/components/pages/challenge/challenge-summary-section/ChallengeSummarySection';
import { CheckCircleIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './certify-detail.module.scss';
import { useRouter } from 'next/navigation';

const CertifyDetail = () => {
  const router = useRouter();
  return (
    <div>
      <ChallengeSummarySection />
      <div className={styles.divider} />
      <section className={styles.certify__section}>
        <div className={styles.certify__section__title__row}>
          <Text.Title variant={18}>인증(6/14)</Text.Title>
          <button className={styles.certify__history__button} onClick={() => router.push('/certify/1/history')}>
            <CheckCircleIcon />
            <Text.Title variant={14}>인증현황</Text.Title>
          </button>
        </div>
        <CertifyCard />
      </section>
    </div>
  );
};

export default CertifyDetail;
