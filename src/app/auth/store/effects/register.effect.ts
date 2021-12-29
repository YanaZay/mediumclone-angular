import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.actions';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  public register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
