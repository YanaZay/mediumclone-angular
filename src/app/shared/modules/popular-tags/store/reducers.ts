import { createReducer, on } from '@ngrx/store';

import { IPopularTagsState } from '../types/popularTagsState.interface';
import {
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.action';

const initialState: IPopularTagsState = {
  data: null,
  isLoading: false,
  error: null,
};

export const popularTagsReducers = createReducer(
  initialState,
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
    })
  )
);
