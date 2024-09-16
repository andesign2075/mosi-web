'use client';

import { BottomNavigation, Text } from '@/components/common';
import { CompletedChallengeTemplate, ProceedingChallengeTemplate } from '@/components/pages/challenge';
import React, { useState } from 'react';

import styles from './activity.module.scss';

const ActivityPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'PROCEEDING' | 'COMPLETED'>('PROCEEDING');

  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <Text.Heading variant={24} className={styles.title}>
          챌린지 로그
        </Text.Heading>

        <div className={styles.tab__container}>
          <button
            className={currentTab === 'PROCEEDING' ? styles.checked__button : ''}
            onClick={() => setCurrentTab('PROCEEDING')}
          >
            <Text.Body variant={18}>진행 중</Text.Body>
          </button>
          <button
            className={currentTab === 'COMPLETED' ? styles.checked__button : ''}
            onClick={() => setCurrentTab('COMPLETED')}
          >
            <Text.Body variant={18}>완료</Text.Body>
          </button>
        </div>
        {currentTab === 'PROCEEDING' ? <ProceedingChallengeTemplate /> : <CompletedChallengeTemplate />}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default ActivityPage;
