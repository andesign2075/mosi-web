import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import axiosInstance from '@/api/axiosInstance';

interface PostCertifyReq {
  challengeId: number;
  title: string;
  contents: string;
  imageUrl: string;
  show: boolean;
}

const postCertify = async (payload: PostCertifyReq): Promise<any> => {
  const response = await axiosInstance.post(`/api/v1/verification-logs`, payload);
  return response.data;
};

/**
 *
 * @name usePostCertify
 * @description 인증하기(저장)
 */
const usePostCertify = (
  options: UseMutationOptions<{}, AxiosError, PostCertifyReq>,
): UseMutationResult<{}, AxiosError, PostCertifyReq> => {
  return useMutation<{}, AxiosError, PostCertifyReq>({
    mutationFn: (payload: PostCertifyReq) => postCertify(payload),
    ...options,
  });
};

export default usePostCertify;
