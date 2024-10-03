import ChallengeInfoCard from '../ChallengeInfoCard';
import React from 'react';
import { Text } from '@/components/common';
import styles from './completed-challenge-template.module.scss';
import useGetMyChallenges from '@/queries/activity/useGetMyChallenges';

const CompletedChallengeTemplate = () => {
  const { data } = useGetMyChallenges({ status: 'COMPLETED' });

  return (
    <div>
      <Text.Title className={styles.section__title} variant={18}>
        참가 완료한 챌린지
      </Text.Title>
      <div className={styles.section_content_container}>
        {data?.data.map((ele) => <ChallengeInfoCard data={ele} key={ele.id} />)}
      </div>
    </div>
  );
};

export default CompletedChallengeTemplate;
