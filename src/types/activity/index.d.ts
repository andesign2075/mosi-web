export interface MyChallengeData {
  id: number;
  status: {
    code: string;
    desc: string;
  };
  member: {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    birth: string;
    address: string;
    profileImageUrl: string;
    termsOfService: boolean;
    termsOfPrivacy: boolean;
    termsOfMarketing: boolean;
  };
  challenge: {
    id: 1;
    thumbnailImageUrl: string;
    introVideoUrl: string;
    title: string;
    weeklyFrequency: number;
    periodWeeks: number;
    prizeAmount: number;
    contents: string;
    startDate: string;
    endDate: string;
  };
}
