import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PersonaNaturalService } from 'src/app/core/services/persona-natural.service';
import { VendedorService } from 'src/app/core/services/vendedor.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  isLoading: boolean;
  formVendedor: FormGroup;
  formPersonaNatural: FormGroup;
  idPersonaN: number;

  constructor(
    private fb: FormBuilder,
    private vendedorService: VendedorService,
    private authService: AuthService,
    private pNaturalService: PersonaNaturalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formVendedor = this.fb.group({
      nit: [null, Validators.required],
      rut: [null, Validators.required],
      razonSocial: [null, Validators.required],
      sitioWeb: [null, Validators.required],
      direccion: this.fb.group({
        pais: [null, Validators.required],
        departamento: [null, Validators.required],
        municipio: [null, Validators.required],
        barrio: [null, Validators.required],
        direccion: [null, Validators.required]
      })
    });

    this.formPersonaNatural = this.fb.group({
      nombre1: [null, [Validators.required]],
      nombre2: [null, []],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      tipoDocumento: [null, [Validators.required]],
      numDocumento: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });

    this.vendedorService.getVendedor(this.authService.getIdUsuario('VENDEDOR')).subscribe(
      ({ PersonaNatural, ...vendedor }) => {
        this.formVendedor.patchValue(vendedor);
        this.formPersonaNatural.patchValue(PersonaNatural);
        this.idPersonaN = PersonaNatural.id;
      },
      err => console.log(err)
    );
  }

  onSubmit() {
    this.vendedorService
      .updateVendedor(this.authService.getIdUsuario('VENDEDOR'), this.formVendedor.value)
      .subscribe(
        data => {
          this.isLoading = false;
          alert(data.message);
          localStorage.setItem('VENDEDOR_TOKEN', data.token);
          this.router.navigate(['/vendedores']);
        },
        err => console.log(err)
      );
  }

  onSubmitPN() {
    this.pNaturalService.updatePersonaN(this.idPersonaN, this.formPersonaNatural.value).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
