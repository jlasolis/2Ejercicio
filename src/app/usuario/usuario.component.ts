import { Component } from '@angular/core';
import { Curso } from '../cursos';
import { UsuariosService } from '../usuarios.service';
import { ContenidoUSUARIOS } from '../mock-datos';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  usuarioSeleccionado: Usuario | undefined; //ponemos undefined para inicializar la variable a algo
  //listaUsuarios = ContenidoUsuarios; 
  //esta era la declaracion anterior antes de suscribirnos;
  listaUsuarios : any =[];
  
  getUsuarios(): void {
    //this.listaUsuarios = this.UsuariosDelService.getUsuarios();
    //lo de arriba es de antes de suscribirnos
    this.UsuariosDelService.getUsuarios()
    .subscribe(listaSuscritaUsuarios => this.listaUsuarios = listaSuscritaUsuarios);
  }

  mostrarDetalles(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private UsuariosDelService: UsuariosService) {};
 
}
