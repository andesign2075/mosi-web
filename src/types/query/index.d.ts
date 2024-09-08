export interface ApiResponse<T> {
  totalElements: number;
  totalPage: number;
  data: T[];
}
