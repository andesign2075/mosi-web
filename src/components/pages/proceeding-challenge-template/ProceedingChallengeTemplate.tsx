import { ChallengeInfoCard } from '@/components/pages';
import React from 'react';
import { Text } from '@/components/common';
import styles from './proceeding-challenge-template.module.scss';

const ProceedingChallengeTemplate = () => {
  return (
    <div>
      <Text.Title className={styles.section__title} variant={18}>
        참가한 챌린지
      </Text.Title>
      <ChallengeInfoCard />
    </div>
  );
};

export default ProceedingChallengeTemplate;
