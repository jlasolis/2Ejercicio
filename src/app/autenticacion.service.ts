import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuarios';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

    private usuariosUrl = 'api/usuariosDb';  // URL to web api
    private logeado=false;
    private nivel=0;
    private usuario: Usuario = {
      id: 0,
      dni: '',
      nom: '',
      ap: '',
      us: '',
      pas: '',
      f: '',
      dir: '',
      tel: 0,
      t_us: '',
      ac: false
    };
  
    

    autenticarUsuario(nombreUsuario: Usuario): boolean {
       const url = `${this.usuariosUrl}/${nombreUsuario}`;
      this.http.post<Usuario>(url, this.usuario).pipe(
         tap(_ => this.log(`Traemos el Usuario con us=${nombreUsuario}`)),
         catchError(this.handleError<Usuario>(` Error al traer al Usuario con us=${nombreUsuario}`))
       );
       if (this.usuario.ac==true) {
        this.logeado=true;
            switch(this.usuario.t_us) { 
              case '1':{
                this.nivel=1; 
                break;
              }
              case '2':{
                this.nivel=2; 
                break;
              }
              default: { 
                this.nivel=0; 
                break; 
              }
          }
        }
       else
       {
        this.logeado=false
       }
     return this.logeado;
   } 
   
   getLogeado() {
     return this.logeado;
    }
 
    getNivel(){
     return this.nivel;
    }
 
 
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
 
    constructor(private http: HttpClient,
     private messageService: MensajeService) { }
    
}
