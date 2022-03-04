import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { PersistenceService } from '../../../shared/services/persistence.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  public getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
