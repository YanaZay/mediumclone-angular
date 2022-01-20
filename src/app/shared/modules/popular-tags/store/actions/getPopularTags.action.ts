import { createAction, props } from '@ngrx/store';

import { PopularTagType } from '../../../../types/popularTag,type';

export const getPopularTagsAction = createAction(
  '[PopularTags] Get popular tags'
);

export const getPopularTagsSuccessAction = createAction(
  '[PopularTags] Get popular tags success',
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailureAction = createAction(
  '[PopularTags] Get popular tags failure'
);
