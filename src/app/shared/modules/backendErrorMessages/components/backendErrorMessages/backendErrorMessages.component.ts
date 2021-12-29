import { Component, Input, OnInit } from '@angular/core';

import { IBackendErrors } from '../../../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: IBackendErrors;
  public errorMessages!: any;

  constructor() {}

  public ngOnInit(): void {
    console.log(this.backendErrorsProps);
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map(
        (name: string) => {
          const messages = this.backendErrorsProps[name].join(', ');

          return `${name} ${messages}`;
        }
      );
    }
  }
}
