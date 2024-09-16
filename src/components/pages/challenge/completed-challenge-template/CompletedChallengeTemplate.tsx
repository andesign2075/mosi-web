import ChallengeInfoCard from '../challenge-info-card/ChallengeInfoCard';
import React from 'react';
import { Text } from '@/components/common';
import styles from './completed-challenge-template.module.scss';
import useGetMyChallenges from '@/queries/activity/useGetMyChallenges';

const CompletedChallengeTemplate = () => {
  const { data } = useGetMyChallenges({ status: 'COMPLETED' });
  console.log(data);

  return (
    <div>
      <Text.Title className={styles.section__title} variant={18}>
        참가 완료한 챌린지
      </Text.Title>
      <ChallengeInfoCard />
    </div>
  );
};

export default CompletedChallengeTemplate;
