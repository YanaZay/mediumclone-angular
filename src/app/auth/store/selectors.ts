import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth');
// deprecate the State generic of createFeatureSelector because it's causing type issues with Store.
// ф-я получает feature из auth.module -> store.module(import)

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
);
