import { createAction, props } from '@ngrx/store';

import { ActionType } from '../actionType';
import { IRegisterRequest } from '../../types/registerRequest.interface';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
