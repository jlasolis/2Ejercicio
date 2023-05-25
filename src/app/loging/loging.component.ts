import { Component } from '@angular/core';
import { Usuario } from '../usuarios';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    <form (ngSubmit)="login()">
      <label for="username">Username</label>
      <input type="text" id="username" [(ngModel)]="usuario.us" name="username" required>

      <label for="password">Password</label>
      <input type="password" id="password" [(ngModel)]="usuario.pas" name="password" required>

      <button type="submit">Login</button>
    </form>
    <div *ngIf="loginError" class="error">Error: Usuario o contraseña incorrectos</div>
  `,
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class LoginComponent {
  usuario: Usuario = {
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

  loginError = false;

  constructor(private authService: AutenticacionService) {}

  login() {
    this.authService.autenticarUsuario(this.usuario)
      .subscribe(
        resultado => {
          if (resultado) {
            // Login exitoso
            this.loginError = false;
            // Realizar las acciones necesarias después del login, como redireccionar a otra página
          } else {
            // Login fallido
            this.loginError = true;
          }
        },
        error => {
          console.error(error);
          this.loginError = true;
        }
      );
  }
}
