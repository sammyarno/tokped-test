export interface ResponseData {
  data: any;
  meta?: any;
}
export interface GlobalListMeta {
  limit: number;
  totalData: number;
  page: number;
  totalPage: number;
}

export interface GlobalListParams {
  limit: number;
  offset: number;
}
