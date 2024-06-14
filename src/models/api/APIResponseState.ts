export interface ErrorResponse {
  statusCode: number;
  message?: string;
  errorCode?: string;
}
export interface ResponseEmpty {
  isSuccessful: boolean;
}

export interface Response<T> {
  isSuccessful: boolean;
  body?: T;
  errorBody?: ErrorResponse;
}
