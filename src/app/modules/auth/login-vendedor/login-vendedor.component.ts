import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/core/services/vendedor.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.css']
})
export class LoginVendedorComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private vendedorService: VendedorService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.vendedorService.login(this.formLogin.value).subscribe(
      data => {
        alert(data.message);
        localStorage.setItem('VENDEDOR_TOKEN', data.token);
        this.router.navigate([this.returnUrl || '/vendedores']);
      },
      err => console.log(err)
    );
  }
}
