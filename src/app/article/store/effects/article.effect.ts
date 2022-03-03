import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/article.action';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { IArticle } from '../../../shared/types/article.interface';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Injectable()
export class ArticleEffect {
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

  public deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteArticleFailureAction());
          })
        );
      })
    )
  );

  public redirectAfterDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => {
        this.router.navigate(['/']);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private articleService: ArticleService,
    private router: Router
  ) {}
}
