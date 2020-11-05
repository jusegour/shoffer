import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomiciliarioService } from 'src/app/core/services/domiciliario.service';

@Component({
  selector: 'app-login-domiciliario',
  templateUrl: './login-domiciliario.component.html',
  styleUrls: ['./login-domiciliario.component.css']
})
export class LoginDomiciliarioComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domiciliarioService: DomiciliarioService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(8)]]
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  onSubmit() {
    this.isLoading = true;
    this.domiciliarioService.login(this.formLogin.value).subscribe(
      data => {
        this.isLoading = false;
        localStorage.setItem('DOMICILIARIO_TOKEN', data.token);
        this.router.navigate([this.returnUrl || '/domiciliarios']);
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
