import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IArticleInput } from '../../../../types/article-input.interface';
import { IBackendErrors } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  public form: FormGroup;

  @Input('initialValues') initialValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: IBackendErrors | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<IArticleInput>();

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: '',
    });
  }
}
