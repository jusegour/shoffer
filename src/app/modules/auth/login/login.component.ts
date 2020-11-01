import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/core/services/consumidor.service';
import { getAccesToken, setAccessToken } from '@app/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private consumidorService: ConsumidorService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.consumidorService.login(this.formLogin.value).subscribe(
      data => {
        console.log(data);

        setAccessToken(data.accessToken);

        // localStorage.setItem('CONSUMIDOR_TOKEN', data.token);
        // this.router.navigate([this.returnUrl || '/consumidores']);
      },
      err => console.log(err)
    );
  }

  f() {
    console.log(getAccesToken());

    setTimeout(() => {
      this.consumidorService.refreshToken().subscribe(
        ({ accessToken }) => {
          setAccessToken(accessToken);
        },
        err => console.log(err)
      );
    }, 2000);
  }
}
