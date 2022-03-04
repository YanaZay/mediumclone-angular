import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ILoginRequest } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitting$!: Observable<boolean>;
  public backendErrors$: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
