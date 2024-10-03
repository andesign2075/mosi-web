'use client';

import { FilmIcon, LogIcon } from '@/assets/icons';

import COLORS from '@/styles/ui/_theme.module.scss';
import ChallengeSummarySection from '../ChallengeSummarySection';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-review-info-bottomsheet.module.scss';
import { useGetChallengeDetail } from '@/queries/challenge';
import { useWindowSize } from '@/hooks/useWindowSize';

interface Props {
  id: string;
  currentSection: 'INFO' | 'CONTENT';
  onClick: React.Dispatch<React.SetStateAction<'CONTENT' | 'INFO' | undefined>>;
}
const ChallengeReviewInfoBottomSheet = ({ id, currentSection, onClick }: Props) => {
  const windowSize = useWindowSize();

  const { data } = useGetChallengeDetail(id);
  const detailData = data?.data[0];

  if (!detailData) {
    return null;
  }

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
              <Text.Title variant={16}>0702 건강을위한 걷기 참가하고 오운완~</Text.Title>
              <Text.Body variant={16}>
                어느덧 챌린지 3일차에요 처음엔 ~했었는데 지금은 익숙해져서 루틴이 잡혔습니다 이대로면 챌린지 무조건
                성공할거 같아요! p.s 한강 뚝섬유원지 러닝 정말 좋으니 한번 방문해보세요
              </Text.Body>
            </div>
          ) : (
            <ChallengeSummarySection
              thumbnailImageUrl={detailData.thumbnailImageUrl}
              title={detailData.title}
              periodWeeks={detailData.periodWeeks}
              weeklyFrequency={detailData.weeklyFrequency}
              startDate={detailData.startDate}
              endDate={detailData.endDate}
              participantCount={detailData.participantCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeReviewInfoBottomSheet;
