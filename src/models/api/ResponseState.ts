import { ErrorResponse } from './APIResponseState';

export enum State {
  Loading,
  Success,
  Fail,
  Error,
}

export interface ResponseState<T> {
  responseState: State;
  data?: T;
  error?: ErrorResponse;
}
