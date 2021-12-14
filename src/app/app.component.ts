import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public show(): boolean {
    return false;
  }
  public hide(): void {
    const a = this.show();
  }
}
