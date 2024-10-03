import { Nullable } from '../common';

export interface ChallengeData {
  id: number;
  thumbnailImageUrl: string;
  introVideoUrl: Nullable<string>;
  title: string;
  weeklyFrequency: number;
  periodWeeks: number;
  prizeAmount: number;
  contents: Nullable<string>;
  participantCount: Nullable<number>;
  startDate: string;
  endDate: string;
}

export interface ChallengeDetailData {
  id: number;
  thumbnailImageUrl: Nullable<string>;
  introVideoUrl: Nullable<string>;
  title: string;
  weeklyFrequency: number;
  periodWeeks: number;
  prizeAmount: number;
  contents: Nullable<string>;
  participantCount: Nullable<number>;
  startDate: string;
  endDate: string;
}
