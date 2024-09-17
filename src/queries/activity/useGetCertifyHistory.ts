import { ApiResponse } from '@/types/query';
import type { CertifyData } from '@/types/activity';
import axiosInstance from '@/api/axiosInstance';
import { buildQuery } from '@/utils/buildQuery';
import { useQuery } from '@tanstack/react-query';

const getCertifyHistory = async ({ challengeId }: { challengeId: string }) => {
  const response = await axiosInstance.get<ApiResponse<CertifyData>>(
    `/api/v1/verification-logs?${buildQuery({ challengeId, page: 1, size: 10 })}`,
  );
  return response.data;
};

const useGetCertifyHistory = ({ challengeId }: { challengeId: string }) => {
  return useQuery({
    queryKey: ['GET_VERIFICATION_LOGS'],
    queryFn: async () => await getCertifyHistory({ challengeId }),
  });
};

export default useGetCertifyHistory;
