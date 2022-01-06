import { IAuthState } from '../../auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';
import { IPopularTagsState } from '../modules/popular-tags/types/popularTagsState.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
}
