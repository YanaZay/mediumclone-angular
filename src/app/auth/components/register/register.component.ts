import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitting$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
    this.authService
      .register(this.form.value)
      .subscribe((currentUser: ICurrentUser) => {
        console.log(currentUser);
      });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
