import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { ContenidoUSUARIOS } from './mock-datos';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'api/usuariosDb';  // URL to web api

  private log(message: string) {
    this.messageService.add(`UsuariosService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsuarioUnico(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => this.log(`Traemos el Usuario con id=${id}`)),
      catchError(this.handleError<Usuario>(` Error al traer al Usuario con id=${id}`))
    );
  }
  
  getUsuarios(): Observable<Usuario[]> {

    
    //cambiamos la llamada de la lista de usuarios local por llamada HTTTP
    //const listaObservabledeUsuarios = of(ContenidoUSUARIOS);
    //llamada a enviar el mensaje
    //this.messageService.add('Servicio de Usuarios: Usuarios recuperados');
    //return listaObservabledeUsuarios;

    return this.http.get<Usuario[]>(this.usuariosUrl)
    .pipe(
      tap(_ => this.log('Traemos a los Alumnos por API')),
      catchError(this.handleError<Usuario[]>('getUsuarios', []))
    );
  }

  constructor(private http: HttpClient,
    private messageService: MensajeService) { }
}


