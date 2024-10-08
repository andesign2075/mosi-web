import { ApiResponse } from '@/types/query';
import type { ChallengeReviewData } from '@/types/review';
import axiosInstance from '@/api/axiosInstance';
import { buildQuery } from '@/utils/buildQuery';
import { useQuery } from '@tanstack/react-query';

const getChallengeReview = async ({ challengeId }: { challengeId: string }) => {
  const response = await axiosInstance.get<ApiResponse<ChallengeReviewData>>(
    `/api/v1/verification-logs?${buildQuery({ challengeId, page: 1, size: 10 })}`,
  );
  return response.data;
};

const useGetChallengeReview = ({ challengeId }: { challengeId: string }) => {
  return useQuery({
    queryKey: ['GET_VERIFICATION_LOGS'],
    queryFn: async () => await getChallengeReview({ challengeId }),
  });
};

export default useGetChallengeReview;
