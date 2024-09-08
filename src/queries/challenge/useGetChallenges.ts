import axiosInstance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const useGetChallenges = () => {
  return useQuery({
    queryKey: ['GET_CHALLENGES'],
    queryFn: async () => await axiosInstance.get('/api/v1/challenges?page=1&size=10'),
  });
};

export default useGetChallenges;
