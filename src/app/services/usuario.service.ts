import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  localSource = "https://localhost:5001/api";

  constructor(private http: HttpClient, ) { }
  guardar(data: any) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    let body = {
      Nombre: data.Nombre,
      Apellido: data.Apellido,
      Genero: data.Genero,
      Cedula: data.Cedula,
      FechaNacimiento: data.FechaNacimiento,
      DepartamentoId: data.DepartamentoId,
      cargo: data.cargo,
      Supervisor: data.Supervisor,
    };
    var address = this.localSource + "/USUARIO";
    return this.http.post(address, body, { headers: headers });
  }
}
