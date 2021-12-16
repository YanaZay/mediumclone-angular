import { createAction, props } from '@ngrx/store';

import { ActionType } from '../actionType';
import { IRegisterRequest } from '../../types/registerRequest.interface';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<IRegisterRequest>()
);
