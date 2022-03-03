import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleComponent } from './components/article/article.component';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { articleReducer } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tag-list/tagList.module';

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
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    RouterModule,
    ErrorMessagesModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  providers: [SharedArticleService],
})
export class ArticleModule {}
