import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/core/services/consumidor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private consumidorService: ConsumidorService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: [null, [Validators.required, Validators.minLength(3), Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  onSubmit() {
    this.isLoading = true;
    this.consumidorService.login(this.formLogin.value).subscribe(
      ({ token }) => {
        this.isLoading = false;
        localStorage.setItem('CONSUMIDOR_TOKEN', token);
        this.router.navigate([this.returnUrl || '/consumidores']);
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
