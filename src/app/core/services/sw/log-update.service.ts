import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class LogUpdateService {
  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      alert('current version is ' + event.current);
      alert('available version is ' + event.available);
    });
    updates.activated.subscribe(event => {
      alert('old version was ' + event.previous);
      alert('new version is ' + event.current);
    });
  }
}
