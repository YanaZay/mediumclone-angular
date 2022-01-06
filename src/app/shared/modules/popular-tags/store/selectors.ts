import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPopularTagsState } from '../types/popularTagsState.interface';

export const popularTagsFeatureSelector =
  createFeatureSelector<IPopularTagsState>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data
);
