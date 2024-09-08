import { ApiResponse } from '@/types/query';
import { ChallengeDetailData } from '@/types/challenge';
import axiosInstance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const getChallengeDetail = async (id: string) => {
  const response = await axiosInstance.get<ApiResponse<ChallengeDetailData>>(`/api/v1/challenges?challengeId=${id}`);
  return response.data;
};

const useGetChallengeDetail = (id: string) => {
  return useQuery({
    queryKey: ['GET_CHALLENGES_DETAIL'],
    queryFn: async () => await getChallengeDetail(id),
  });
};

export default useGetChallengeDetail;
