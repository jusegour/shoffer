import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updateCheckText = '';

  constructor(private update: SwUpdate) {}

  updateCheck(): void {
    this.update
      .checkForUpdate()
      .then(() => (this.updateCheckText = 'resolved'))
      .catch(err => (this.updateCheckText = `rejected: ${err.message}`));
  }
}
