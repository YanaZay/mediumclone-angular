import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../../../../types/currentUser.interface';
import { select, Store } from '@ngrx/store';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isAnonymous$: Observable<boolean>;
  public currentUser$: Observable<ICurrentUser | null>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.initializeValue();
  }

  private initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
