import { IArticle } from '../../shared/types/article.interface';

export interface IArticleState {
  isLoading: boolean;
  error: string | null;
  data: IArticle | null;
}
