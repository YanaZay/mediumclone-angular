import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessagesComponent } from './components/errorMessages/errorMessages.component';

@NgModule({
  declarations: [ErrorMessagesComponent],
  imports: [CommonModule],
  exports: [ErrorMessagesComponent],
})
export class ErrorMessagesModule {}
