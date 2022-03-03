import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IArticleState } from '../types/articleState.interface';

export const articleFeatureSelector =
  createFeatureSelector<IArticleState>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.data
);
