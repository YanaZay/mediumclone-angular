import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IGetArticleResponse } from '../types/get-article-response.interface';
import { IArticle } from '../types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .get<IGetArticleResponse>(fullUrl)
      .pipe(map((response: IGetArticleResponse) => response.article));
  }
}
