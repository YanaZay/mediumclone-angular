import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getFeed.action';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { IArticle } from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  public getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
