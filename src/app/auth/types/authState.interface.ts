import { ICurrentUser } from '../../shared/types/currentUser.interface';
import { IBackendErrors } from '../../shared/types/backendErrors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
