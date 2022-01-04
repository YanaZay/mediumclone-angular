import { createAction, props } from '@ngrx/store';

import { ICurrentUser } from '../../../shared/types/currentUser.interface';

export const getCurrentUserAction = createAction('[Auth] Get current user');

export const getCurrentUserSuccessAction = createAction(
  '[Auth] Get current user success',
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  '[Auth] Get current user failure'
);
