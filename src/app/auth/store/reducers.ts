import { IAuthState } from '../types/authState.interface';
import { registerAction } from './actions/register.actions';

import { createReducer, on } from '@ngrx/store';

const initialState: IAuthState = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => ({ ...state, isSubmitting: true }))
);
