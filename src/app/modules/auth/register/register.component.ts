import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/core/services/consumidor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formConsumidor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private consumidorService: ConsumidorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formConsumidor = this.fb.group({
      nombre1: [null, [Validators.required]],
      apellido1: [null, [Validators.required]],
      correo: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repetPassword: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() {
    return this.formConsumidor.controls;
  }

  onSubmit() {
    this.consumidorService.storeConsumidor(this.formConsumidor.value).subscribe(
      data => {
        alert(data.message);
        localStorage.setItem('CONSUMIDOR_TOKEN', data.token);
        this.router.navigate(['/consumidores/completar-registro']);
      },
      err => console.log(err)
    );
  }
}
