import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioService } from "../../services/usuario.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario : FormGroup;
  status;
  constructor(
    private _userService: UsuarioService,

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.usuario = new FormGroup({
      Nombre: new FormControl(""),
      Apellido: new FormControl(""),
      Genero: new FormControl(""),
      Cedula: new FormControl(""),
      FechaNacimiento: new FormControl(""),
      DepartamentoId: new FormControl(""),
      cargo: new FormControl(""),
      Supervisor: new FormControl(""),
    });
  }

  async guardar(){
      let Usuario = this.usuario.value;
      let dataValues = {
      Nombre: Usuario.Nombre,
      Apellido: Usuario.Apellido,
      Genero: Usuario.Genero,
      Cedula: Usuario.Cedula,
      FechaNacimiento: Usuario.FechaNacimiento,
      DepartamentoId: Usuario.DepartamentoId,
      cargo: Usuario.cargo,
      Supervisor: Usuario.Supervisor,
      };
      this._userService.guardar(dataValues).subscribe(
        response => {          
            this.status = 200;
            console.log("ok");

          },
        error => {
          this.status = "error";
          console.log(<any>error);
        }
      );
  }

}
