import { createAction, props } from '@ngrx/store';

import { IArticle } from '../../../shared/types/article.interface';

export const getArticleAction = createAction(
  '[Article] Get article',
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  '[Article] Get article success',
  props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
  '[Article] Get article failure'
);
export const deleteArticleAction = createAction(
  '[Article] Delete article',
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  '[Article] Delete article success'
);

export const deleteArticleFailureAction = createAction(
  '[Article] Delete article failure'
);
