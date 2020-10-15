import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="d-flex justify-content-center mb-4">
      <a routerLink="">
        <img src="assets/images/logo.png" height="100" width="auto" alt="Logo" class="logo" />
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
