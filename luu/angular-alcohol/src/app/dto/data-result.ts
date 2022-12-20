export interface DataResult<T> {
  content: T[];
  pageable: {
    pageNumber: number,
    pageSize: number
  };
  totalElements: number;
  totalPages: number;
}
