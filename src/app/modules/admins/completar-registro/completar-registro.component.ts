import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  formAdmin: FormGroup;
  isLoading: boolean;
  idAdmin: number;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formAdmin = this.fb.group({
      nombre1: [null, [Validators.required]],
      nombre2: [null, []],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });
    this.idAdmin = this.authService.getIdUsuario('ADMIN');

    this.adminService.getAdmin(this.authService.getIdUsuario('ADMIN')).subscribe(
      data => this.formAdmin.patchValue(data),
      err => console.log(err)
    );
  }

  onSubmit() {
    this.isLoading = true;

    this.adminService.updateAdmin(this.idAdmin, this.formAdmin.value).subscribe(
      data => {
        this.isLoading = false;
        alert(data.message);
        localStorage.setItem('ADMIN_TOKEN', data.token);
        this.router.navigate(['/admins']);
      },
      err => {
        this.isLoading = false;
        console.error(err);
      }
    );
  }
}
