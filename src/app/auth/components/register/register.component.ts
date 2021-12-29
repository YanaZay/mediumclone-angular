import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.actions';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { IRegisterRequest } from '../../types/registerRequest.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      username: ['', [Validators.required]],
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
    const request: IRegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
