import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { IFeedState } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (state): IFeedState => initialState)
);
