import { PopularTagType } from '../../../types/popular-tag,type';

export interface IPopularTagsState {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
