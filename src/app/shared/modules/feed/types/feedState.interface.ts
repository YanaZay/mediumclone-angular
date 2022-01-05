import { IGetFeedResponse } from './getFeedResponse.interface';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}
