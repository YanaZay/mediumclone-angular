import { Component, Input, OnInit, Output } from '@angular/core';

import { IArticleInput } from '../../../../types/article-input.interface';
import { IBackendErrors } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: IBackendErrors | null;

  @Output('articleSubmit') articleSubmitEvent: null;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
