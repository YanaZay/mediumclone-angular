import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subject, takeUntil } from 'rxjs';

import {
  deleteArticleAction,
  getArticleAction,
} from '../../store/actions/article.action';
import { IArticle } from '../../../shared/types/article.interface';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';
import { ICurrentUser } from '../../../shared/types/current-user.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  public slug: string;
  public article: IArticle | null;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public isAuthor$: Observable<boolean>;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  public deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([article, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    );
  }

  private initializeListeners() {
    this.store
      .pipe(takeUntil(this.destroy$), select(articleSelector))
      .subscribe((article: IArticle | null) => {
        this.article = article;
      });
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
