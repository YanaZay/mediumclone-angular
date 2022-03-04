import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
