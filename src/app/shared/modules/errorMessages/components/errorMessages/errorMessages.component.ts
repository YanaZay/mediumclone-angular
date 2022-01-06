import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  template: `<div>{{ messageProps }}</div>`,
})
export class ErrorMessagesComponent {
  @Input('message') messageProps: string = 'Something went wrong';
}
