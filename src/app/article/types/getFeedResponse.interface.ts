import { IArticle } from '../../../types/article.interface';

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: null;
}
