'use client';

import { FilmIcon, LogIcon } from '@/assets/icons';

import COLORS from '@/styles/ui/_theme.module.scss';
import { ChallengeDetailData } from '@/types/challenge';
import { ChallengeReviewData } from '@/types/review';
import ChallengeSummarySection from '../ChallengeSummarySection';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-info-bottomsheet.module.scss';
import { useWindowSize } from '@/hooks/useWindowSize';

interface Props {
  currentSection: 'INFO' | 'CONTENT';
  onClick: React.Dispatch<React.SetStateAction<'CONTENT' | 'INFO' | undefined>>;
  challenge: ChallengeDetailData;
  review: ChallengeReviewData;
}
const ChallengeReviewInfoBottomSheet = ({ currentSection, onClick, challenge, review }: Props) => {
  const windowSize = useWindowSize();

  if (!windowSize) {
    return null;
  }

  return (
    <div
      className={styles.view__container}
      style={{ height: `${windowSize?.height - 64}px` }}
      onClick={() => onClick(undefined)}
    >
      <div className={styles.container}>
        {/* 상단 탭 */}
        <div className={styles.bottom__container} onClick={(e) => e.stopPropagation()}>
          <div onClick={() => onClick('CONTENT')}>
            <LogIcon fill={currentSection === 'CONTENT' ? COLORS.SEMENTIC_PRIMARY : COLORS.GRAY_600} />
            <Text.Body
              variant={12}
              className={(styles.bottom__text, currentSection === 'CONTENT' ? styles.primary : '')}
            >
              내용
            </Text.Body>
          </div>
          <div onClick={() => onClick('INFO')}>
            <FilmIcon fill={currentSection === 'INFO' ? COLORS.SEMENTIC_PRIMARY : COLORS.GRAY_600} />
            <Text.Body variant={12} className={(styles.bottom__text, currentSection === 'INFO' ? styles.primary : '')}>
              챌린지 정보
            </Text.Body>
          </div>
        </div>
        {/* 상단 탭 end */}
        <div className={styles.inner__container}>
          {currentSection === 'CONTENT' ? (
            <div className={styles.content__tab__context}>
              <Text.Title variant={16}>{review.title}</Text.Title>
              <Text.Body variant={16}>{review.contents}</Text.Body>
            </div>
          ) : (
            <ChallengeSummarySection
              thumbnailImageUrl={challenge.thumbnailImageUrl}
              title={challenge.title}
              periodWeeks={challenge.periodWeeks}
              weeklyFrequency={challenge.weeklyFrequency}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participantCount={challenge.participantCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeReviewInfoBottomSheet;
