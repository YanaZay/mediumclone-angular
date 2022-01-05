import { IAuthState } from '../../auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
