import { ApiResponse } from '@/types/query';
import { ChallengeData } from '@/types/challenge';
import axiosInstance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const getChallenges = async () => {
  const response = await axiosInstance.get<ApiResponse<ChallengeData>>('/api/v1/challenges?page=1&size=10');
  return response.data;
};

const useGetChallenges = () => {
  return useQuery({
    queryKey: ['GET_CHALLENGES'],
    queryFn: async () => await getChallenges(),
  });
};

export default useGetChallenges;
