import { createAction, props } from '@ngrx/store';
import { IGetFeedResponse } from '../../types/getFeedResponse.interface';

export const getFeedAction = createAction(
  '[Feed] Get article',
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  '[Feed] Get article success',
  props<{ feed: IGetFeedResponse }>()
);

export const getFeedFailureAction = createAction('[Feed] Get article failure');
