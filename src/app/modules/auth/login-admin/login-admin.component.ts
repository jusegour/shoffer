import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) { }

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
    this.adminService.login(this.formLogin.value).subscribe(
      data => {
        this.isLoading = false;
        localStorage.setItem('ADMIN_TOKEN', data.token);
        this.router.navigate([this.returnUrl || '/admins']);
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
