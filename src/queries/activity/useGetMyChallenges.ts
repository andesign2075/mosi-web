import { ApiResponse } from '@/types/query';
import type { MyChallengeData } from '@/types/activity';
import axiosInstance from '@/api/axiosInstance';
import { buildQuery } from '@/utils/buildQuery';
import { useQuery } from '@tanstack/react-query';

type Status = 'PENDING' | 'ONGOING' | 'COMPLETED';

const getMyChallenges = async ({ status }: { status: Status }) => {
  const response = await axiosInstance.get<ApiResponse<MyChallengeData>>(
    `/api/v1/challenges/my?${buildQuery({ status, page: 1, size: 10 })}`,
  );
  return response.data;
};

const useGetMyChallenges = ({ status }: { status: Status }) => {
  return useQuery({
    queryKey: ['GET_MY_CHALLENGES', status],
    queryFn: async () => await getMyChallenges({ status }),
  });
};

export default useGetMyChallenges;
