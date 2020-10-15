import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConsumidorService } from 'src/app/core/services/consumidor.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  formConsumidor: FormGroup;
  isLoading: boolean;
  idConsumidor: number;

  constructor(
    private fb: FormBuilder,
    private consumidorService: ConsumidorService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formConsumidor = this.fb.group({
      nombre1: [null, [Validators.required]],
      nombre2: [null, []],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });
    this.idConsumidor = this.authService.getIdUsuario('CONSUMIDOR');

    this.consumidorService.getConsumidor(this.authService.getIdUsuario('CONSUMIDOR')).subscribe(
      data => this.formConsumidor.patchValue(data),
      err => console.log(err)
    );
  }

  onSubmit() {
    this.isLoading = true;

    this.consumidorService.updateConsumidor(this.idConsumidor, this.formConsumidor.value).subscribe(
      data => {
        this.isLoading = false;
        alert(data.message);
        localStorage.setItem('CONSUMIDOR_TOKEN', data.token);
        this.router.navigate(['/consumidores']);
      },
      err => {
        this.isLoading = false;
        console.error(err);
      }
    );
  }
}
