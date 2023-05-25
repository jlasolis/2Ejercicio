import { Component, Input } from '@angular/core';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css']
})
export class UsuariosDetalleComponent {
  @Input() usuario?: Usuario;

}
