import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleComponent } from './components/article/article.component';
import { ArticleEffect } from './store/effects/article.effect';
import { articleReducer } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tag-list/tagList.module';
import { ArticleService } from './article.service';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    RouterModule,
    ErrorMessagesModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
