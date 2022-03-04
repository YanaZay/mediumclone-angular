import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { PersistenceService } from '../../../shared/services/persistence.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action';

@Injectable()
export class LoginEffect {
  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  public redirectAfterSubmit = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
