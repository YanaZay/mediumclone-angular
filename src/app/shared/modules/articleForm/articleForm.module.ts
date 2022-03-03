import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [{ path: 'articles/new' }];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule],
})
export class ArticleFormModule {}
