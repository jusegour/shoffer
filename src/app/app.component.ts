import { ApplicationRef, Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { environment } from '@env/environment';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';

function promptUser(_event: UpdateAvailableEvent): boolean {
  return true;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    if (environment.production) {
      // Allow the app to stabilize first, before starting polling for updates with `interval()`.
      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

      everySixHoursOnceAppIsStable$.subscribe(() => {
        updates.checkForUpdate();
      });

      updates.available.subscribe(event => {
        if (promptUser(event)) {
          updates.activateUpdate().then(() => {
            document.location.reload();
          });
        }
      });
    }
  }
}
