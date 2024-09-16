import ChallengeInfoCard from '../ChallengeInfoCard';
import React from 'react';
import { Text } from '@/components/common';
import styles from './proceeding-challenge-template.module.scss';
import useGetMyChallenges from '@/queries/activity/useGetMyChallenges';

const ProceedingChallengeTemplate = () => {
  const { data } = useGetMyChallenges({ status: 'ONGOING' });
  console.log(data);

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
