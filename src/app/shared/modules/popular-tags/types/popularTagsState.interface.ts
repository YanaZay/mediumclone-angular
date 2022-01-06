import { PopularTagType } from '../../../types/popularTag,type';

export interface IPopularTagsState {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
