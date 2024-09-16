import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import axiosInstance from '@/api/axiosInstance';

const postApplyChallenge = async (payload: { id: string }): Promise<any> => {
  const response = await axiosInstance.post(`/api/v1/challenges/apply/${payload.id}`);
  return response.data;
};

const usePostApplyChallenge = (
  options: UseMutationOptions<{}, AxiosError, { id: string }>,
): UseMutationResult<{}, AxiosError, { id: string }> => {
  return useMutation<{}, AxiosError, { id: string }>({
    mutationFn: (payload: { id: string }) => postApplyChallenge(payload),
    ...options,
  });
};

export default usePostApplyChallenge;
