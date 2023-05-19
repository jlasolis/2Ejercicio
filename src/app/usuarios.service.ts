import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { ContenidoUSUARIOS } from './mock-datos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  getUsuarios(): Observable<Usuario[]> {
    const listaObservabledeUsuarios = of(ContenidoUSUARIOS);
    return listaObservabledeUsuarios;
  }
  constructor() { }
}
